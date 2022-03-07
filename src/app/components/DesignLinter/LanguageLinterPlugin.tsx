import * as React from "react";
import { useState, useEffect, useContext } from "react";
import isEqual from "lodash.isequal";
import LanguageLinter, { lintMyText } from "new-relic-language-linter";
import { PluginContext } from "../PluginContext";
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
  }, [sampleText]);

  useEffect(() => {
    console.log("useEffect fired");
    if (localCustomDictionaryInitialized && selectedTextLayers.length > 0) {
      getTextLayersWithSuggestions();
    } else if (
      localCustomDictionaryInitialized &&
      selectedTextLayers.length === 0
    ) {
      setSampleText("");
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
    if (
      !isEqual(currentSelection, currentLayersLintedForLanguage) &&
      currentLayersLintedForLanguage
    ) {
      setSelectionHasChanged(true);
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

  const handleTextLayerNavigation = (direction) => {
    // Which direction does the user want to navigate?
    if (direction === "previous") {
      setSampleText(textLayersWithSuggestions[sampleTextIndex - 1].characters);
      setSampleTextIndex(sampleTextIndex - 1);
    } else if (direction === "next") {
      setSampleText(textLayersWithSuggestions[sampleTextIndex + 1].characters);
      setSampleTextIndex(sampleTextIndex + 1);
    }
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

  return (
    <>
      <div className="language-linter-container">
        <nav className="text-layer-nav">
          <button
            className={"nav-arrow left-nav-arrow"}
            onClick={() => handleTextLayerNavigation("previous")}
            disabled={sampleTextIndex - 1 < 0}
          ></button>

          {/*<div className="select-input-container">
            <select
              name="column-selection"
              className="column-selection-dropdown"
              onChange={() => setActiveColConfigurationScreen(parseInt(event.target.value) - 1)}
              value={activeColConfigurationScreen + 1}
            >
              {[...Array(activeCol).keys()].map((index) => {
                return (
                  <option key={index} value={index + 1} className="column-selection-dropdown-option">{`Column ${
                    index + 1
                  }`}</option>
                );
              })}
            </select>
          </div>*/}

          <button
            className={"nav-arrow right-nav-arrow"}
            onClick={() => handleTextLayerNavigation("next")}
            disabled={sampleTextIndex + 1 >= maxTextIndex}
          ></button>
        </nav>
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
        />
        {selectionHasChanged && (
          <footer className="color-linting-footer">
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
