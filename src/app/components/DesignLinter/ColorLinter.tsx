import * as React from "react";
import { useContext } from "react";
import { PluginContext } from "../PluginContext";
import ColorTile from "./ColorTile";
import classNames from "classnames";
require("babel-polyfill");
import "../../styles/ui.css";

declare function require(path: string): any;

const ColorLinter = () => {
  const { state } = useContext(PluginContext);
  const {
    colorsWithIssues,
    setColorsWithIssues,
    loadingColorData,
    setLoadingColorData,
    selectionMade,
  } = state;

  React.useEffect(() => {
    setLoadingColorData(true);
    parent.postMessage(
      { pluginMessage: { type: "request-selection", message: "colors" } },
      "*"
    );
  }, []);

  const ignoreColorIssue: (colorId: string) => void = (colorId) => {
    const colorToBeRemoved = colorsWithIssues.find((color) => {
      return color.colorId === colorId;
    });

    const indexOfColorToBeRemoved = colorsWithIssues.indexOf(colorToBeRemoved);
    const newColorsWithIssues = [...colorsWithIssues];

    newColorsWithIssues.splice(indexOfColorToBeRemoved, 1);

    setColorsWithIssues(newColorsWithIssues);
  };

  const renderColorIssues = () => {
    if (colorsWithIssues?.length > 0) {
      return colorsWithIssues.map((color, index) => {
        return (
          <ColorTile
            colorData={color}
            key={index}
            ignoreColorIssue={ignoreColorIssue}
          />
        );
      });
    }
  };

  const handleRescanLayersClick = () => {
    setLoadingColorData(true);
    parent.postMessage({ pluginMessage: { type: "request-selection" } }, "*");
  };

  const renderEmptyState = () => {
    const headingText = !loadingColorData
      ? "Select a layer(s) to get started"
      : "Loading color data...";
    const descriptionText = !loadingColorData
      ? "To check your colors select any layer, frame, or group of layers and then lint colors."
      : "This may take a moment";

    return (
      <section className="color-empty-state-container">
        {loadingColorData && <div className="color-loader"></div>}
        <h4 className="color-empty-state-heading">{headingText}</h4>
        <p className="color-empty-state-description">{descriptionText}</p>
        {!loadingColorData && (
          <button
            className="btn btn-primary"
            onClick={() => handleRescanLayersClick()}
          >
            Check colors
          </button>
        )}
      </section>
    );
  };

  const renderColorLintingSummary = () => {
    if (!loadingColorData && selectionMade) {
      return (
        <div className={"color-linting-sumary"}>
          <h3 className="color-linting-summary-heading">
            {colorsWithIssues.length} color issues found
          </h3>
          <p className="color-linting-summary-description">
            {colorsWithIssues.length ? (
              <>
                To fix these issues, replace each of the colors listed below
                with a One Core color style. Not sure what that means?{` `}
                <a href="#">See how</a>.
              </>
            ) : (
              <>
                There are no color issues with the selected layers :). To check
                for issues in other layers select another layer(s) and click
                "Re-scan colors".
              </>
            )}
          </p>
        </div>
      );
    } else {
      return renderEmptyState();
    }
  };

  const noColorIssues = colorsWithIssues?.length === 0;

  const colorLinterContainerClasses = classNames("color-linter-container", {
    "summary-is-loading": loadingColorData,
    "summary-is-empty": noColorIssues,
    "no-selection-made": !selectionMade,
  });

  return (
    <>
      <section className={colorLinterContainerClasses}>
        {renderColorLintingSummary()}
        {!loadingColorData && !noColorIssues && (
          <ul className="color-tiles-container">{renderColorIssues()}</ul>
        )}
      </section>
      {!loadingColorData && selectionMade && (
        <footer className="color-linting-footer">
          <button
            className="btn btn-primary"
            onClick={() => handleRescanLayersClick()}
          >
            Check current selection
          </button>
        </footer>
      )}
    </>
  );
};

export default ColorLinter;
