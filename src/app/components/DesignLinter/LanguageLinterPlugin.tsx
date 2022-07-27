import * as React from "react";
import { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import LanguageLinter, { lintMyText } from "new-relic-language-linter";
import { PluginContext } from "../PluginContext";
import { truncateLayerName } from "../utils";
require("babel-polyfill");
import "../../styles/ui.css";

declare function require(path: string): any;

const LanguageLinterPlugin = () => {
  const [textLayersWithSuggestions, setTextLayersWithSuggestions] = useState(
    []
  );
  const [sampleText, setSampleText] = useState("");
  const [maxTextIndex, setMaxTextIndex] = useState(0);
  const [selectionHasChanged, setSelectionHasChanged] = useState(false);

  const { state } = useContext(PluginContext);
  const {
    selectedTextLayers,
    sampleTextIndex,
    setSampleTextIndex,
    localCustomDictionary,
    localCustomDictionaryInitialized,
    currentSelection,
    currentLayersLintedForLanguage,
  } = state;

  const [linterIsLoading, setLinterIsLoading] = useState(
    currentSelection.length > 0
  );

  const emptyStateActive =
    selectedTextLayers.length === 0 || textLayersWithSuggestions.length === 0;

  // Get the selected layer when the plugin loads
  // This is how we read messages sent from the plugin controller
  useEffect(() => {
    parent.postMessage(
      { pluginMessage: { type: "request-local-custom-dictionary" } },
      "*"
    );
    setSelectionHasChanged(false);
    parent.postMessage({ pluginMessage: { type: "run-language-linter" } }, "*");
  }, []);

  // when `selectedTextLayers` is updated update the sample text
  useEffect(() => {
    if (textLayersWithSuggestions.length > 0) {
      setSampleText(textLayersWithSuggestions[0].characters);
      setMaxTextIndex(textLayersWithSuggestions.length);
    } else {
      setSampleText("");
      setMaxTextIndex(0);
    }
  }, [textLayersWithSuggestions]);

  // Every time the `sampleText` gets updated so that we can
  // scroll and zoom the active layer into the center of the screen
  useEffect(() => {
    if (sampleText !== "") {
      parent.postMessage(
        {
          pluginMessage: {
            type: "sample-text-changed",
            activeNodeId: textLayersWithSuggestions[sampleTextIndex].id,
          },
        },
        "*"
      );
    }
  }, [sampleTextIndex, sampleText]);

  useEffect(() => {
    if (localCustomDictionaryInitialized && selectedTextLayers.length > 0) {
      getTextLayersWithSuggestions();
    } else if (
      localCustomDictionaryInitialized &&
      selectedTextLayers.length === 0
    ) {
      setSampleText("");
      setTextLayersWithSuggestions([]);
      setLinterIsLoading(false);
    } else {
      parent.postMessage(
        { pluginMessage: { type: "request-local-custom-dictionary" } },
        "*"
      );
    }
  }, [selectedTextLayers, localCustomDictionary]);

  // Determine whether the the selection has changed.
  // Then save that to state.
  useEffect(() => {
    let selectionIsCompletelyNew = true;

    if (currentLayersLintedForLanguage && currentSelection.length) {
      // Do any of the currently selected layers match any of the
      // previously selected layers? Because we don't want to show
      // the "check current selection" button if the only selection
      // change has been selecting one of the already selected layers
      selectionIsCompletelyNew = !selectedTextLayers.some(
        (selectedTextLayer) => {
          return selectedTextLayer.id === currentSelection[0].id;
        }
      );

      // Because if we've *added* to the selection, we should allow
      // a recheck check of the seleciton
      if (!selectionIsCompletelyNew) {
        selectionIsCompletelyNew =
          currentSelection.length > selectedTextLayers.length;
      }
    } else {
      setSelectionHasChanged(false);
      return;
    }

    if (selectionIsCompletelyNew) {
      setSelectionHasChanged(true);
      return;
    } else {
      setSelectionHasChanged(false);
    }
  }, [currentSelection, currentLayersLintedForLanguage]);

  const lintSelectedLayers = () => {
    setSelectionHasChanged(false);
    parent.postMessage({ pluginMessage: { type: "run-language-linter" } }, "*");
  };

  const updateSourceText = (updatedText) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "update-source-text",
          layerId: textLayersWithSuggestions[sampleTextIndex].id,
          updatedText: updatedText,
        },
      },
      "*"
    );

    setSampleText(updatedText);
  };

  const handleTextLayerNavigation = (indexOfNewLayer: number) => {
    setSampleTextIndex(indexOfNewLayer);
    setSampleText(textLayersWithSuggestions[indexOfNewLayer].characters);
  };

  const asyncFilter = async (arr, callback) => {
    const fail = Symbol();
    return (
      await Promise.all(
        arr.map(async (item) => ((await callback(item)) ? item : fail))
      )
    ).filter((i) => i !== fail);
  };

  const getTextLayersWithSuggestions = async () => {
    const layersWithSuggestions = await asyncFilter(
      selectedTextLayers,
      async (item) => {
        let report: any = "";

        await Promise.resolve(
          lintMyText(item.characters, localCustomDictionary)
        ).then((result) => (report = result));

        if (report.messages.length > 0) {
          const reportWithEnumerableProps = JSON.parse(
            JSON.stringify(report.messages)
          );

          const minimalReport = reportWithEnumerableProps.map((message) => ({
            actual: message.actual,
            expected: message.expected.slice(0, 3),
            rule: message.source,
          }));

          parent.postMessage(
            {
              pluginMessage: {
                type: "text-linted",
                minimalReport,
                fullReport: reportWithEnumerableProps,
              },
            },
            "*"
          );
        }
        return !!report.messages[0]?.message;
      }
    );

    setTextLayersWithSuggestions(layersWithSuggestions);
  };

  // @ts-ignore
  const addToDictionary = (wordToAdd, suggestionId) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "add-to-dictionary",
          wordToAdd: wordToAdd,
        },
      },
      "*"
    );
  };

  const provideSampleText = () => {
    const layerIsSelected = selectedTextLayers.length > 0;
    const suggestionsAvailable = textLayersWithSuggestions.length > 0;

    if (!layerIsSelected) {
      return "";
    } else if (layerIsSelected && !suggestionsAvailable) {
      // LanguageLinter will show a "no issue found" empty state
      // if their sampleText provided to it has no issues. Since
      // None of our layers have issues, we'll trigger that
      // empty state.
      return "Hello, World";
    } else {
      return sampleText;
    }
  };

  const languageLinterContainerClasses = classNames(
    "language-linter-container",
    {
      "selection-has-changed": selectionHasChanged && !emptyStateActive,
      "empty-state-active": emptyStateActive,
      "linter-is-loading": linterIsLoading,
    }
  );

  const renderEmptyState = () => {
    const noSuggestionsFound = textLayersWithSuggestions.length === 0;
    const shouldShowDefaultCopy =
      noSuggestionsFound && selectedTextLayers.length === 0;

    const headingText = shouldShowDefaultCopy
      ? "Select a text layer(s) to get started"
      : "Your copy looks good!";
    const descriptionText = () => {
      if (shouldShowDefaultCopy) {
        return `Select one or more text layers to lint them against the One Core writing style guide.`;
      } else {
        return (
          <>
            No basic language issues found. Consider reaching out to the {` `}
            <a
              href="https://newrelic.slack.com/archives/CE7FX92TF"
              target="_blank"
            >
              #ui-writing
            </a>{" "}
            team for more in-depth and accurate feedback from our wonderful UI
            writers.
          </>
        );
      }
    };
    const CTAText = "Check language";

    return (
      <section className="color-empty-state-container">
        <h4 className="color-empty-state-heading">{headingText}</h4>
        <p className="color-empty-state-description">{descriptionText()}</p>
        <button
          className="btn btn-primary"
          onClick={() => lintSelectedLayers()}
        >
          {CTAText}
        </button>

        <a
          href="https://peaceful-mclean-b30fef.netlify.app"
          className="try-web-version"
          target="_blank"
        >
          Try the browser version{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="external-link-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1V0H14V6H13V1.7L5.4 9.4L4.6 8.6L12.3 1H8ZM1 5V13H9V9H10V14H0V4H5V5H1Z"
              fill="var(--figma-color-text-brand)"
            />
          </svg>
        </a>
      </section>
    );
  };

  const renderLoadingState = () => {
    return (
      <section className="color-empty-state-container">
        <div className="color-loader"></div>
        <h4 className="color-empty-state-heading">
          Linting selected text layers...
        </h4>
        <p className="color-empty-state-description">This may take a moment</p>
      </section>
    );
  };

  const renderLanguageLinterUI = () => {
    const textLayerSelected = selectedTextLayers.length > 0;

    if (!textLayerSelected && !linterIsLoading) return renderEmptyState();
    if (textLayersWithSuggestions.length === 0 && !linterIsLoading)
      return renderEmptyState();

    const languageLinterUI = () => (
      <LanguageLinter
        // LanguageLinter will show a "no issue found" empty state
        // if their sampleText provided to it has no issues. Since
        // None of our layers have issues, we'll trigger that
        // empty state.
        sampleText={provideSampleText()}
        setSampleText={updateSourceText}
        updateTimer={100}
        customDictionary={localCustomDictionary}
        addToDictionary={addToDictionary}
        openLinksInNewTab={true}
        loadingStateListener={setLinterIsLoading}
      />
    );
    const layerNavigationUI = () => (
      <nav className="text-layer-nav">
        <button
          className={"nav-arrow left-nav-arrow"}
          onClick={() => handleTextLayerNavigation(sampleTextIndex - 1)}
          disabled={sampleTextIndex - 1 < 0}
        ></button>

        <div className="layer-selection-dropdown-container">
          <div className="select-input-container">
            <select
              name="column-selection"
              className="column-selection-dropdown"
              onChange={(e) =>
                handleTextLayerNavigation(parseInt(e.target.value))
              }
              value={sampleTextIndex}
            >
              {textLayersWithSuggestions.map((layer, index) => {
                return (
                  <option
                    key={index}
                    value={index}
                    className="language-linter-layer-option"
                  >
                    {truncateLayerName(layer.name)}
                  </option>
                );
              })}
            </select>
          </div>
          <span className="language-linter-nav-layer-pagination-count">
            {`${sampleTextIndex + 1} of ${
              textLayersWithSuggestions.length
            } layers with issues`}
          </span>
        </div>

        <button
          className={"nav-arrow right-nav-arrow"}
          onClick={() => handleTextLayerNavigation(sampleTextIndex + 1)}
          disabled={sampleTextIndex + 1 >= maxTextIndex}
        ></button>
      </nav>
    );

    if (textLayersWithSuggestions) {
      return (
        <>
          {textLayersWithSuggestions.length > 1 &&
            !linterIsLoading &&
            layerNavigationUI()}{" "}
          {languageLinterUI()}
        </>
      );
    } else {
      return languageLinterUI();
    }
  };

  return (
    <>
      <div className={languageLinterContainerClasses}>
        {linterIsLoading && renderLoadingState()}
        {renderLanguageLinterUI()}

        {selectionHasChanged && !emptyStateActive && (
          <footer className="language-linting-footer">
            <a
              href="https://peaceful-mclean-b30fef.netlify.app"
              className="try-web-version"
              target="_blank"
            >
              Try the web version{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="external-link-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 1V0H14V6H13V1.7L5.4 9.4L4.6 8.6L12.3 1H8ZM1 5V13H9V9H10V14H0V4H5V5H1Z"
                  fill="var(--figma-color-text-brand)"
                />
              </svg>
            </a>
            <button
              className="btn btn-primary"
              onClick={() => lintSelectedLayers()}
            >
              Check current selection
            </button>
          </footer>
        )}
      </div>
    </>
  );
};

export default LanguageLinterPlugin;
