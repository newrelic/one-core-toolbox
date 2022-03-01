import * as React from "react";
import { useState } from "react";
import ColorTile from "./ColorTile";
require("babel-polyfill");
import "../../styles/ui.css";

declare function require(path: string): any;

interface rgbFloat {
  r: number;
  g: number;
  b: number;
}
interface color {
  blendMode: string;
  color: rgbFloat;
  opacity: number;
  type: string;
  visible: boolean;
}
interface colorList {
  color: color[];
  colorId: string;
  colorInHex: string;
  colorStyleId: string;
  colorType: string;
  hasColorStyle: boolean;
  layerId: string;
  layerName: string;
  layerType: string;
  visible: boolean;
}

const ColorLinter = () => {
  const [colorsWithIssues, setColorsWithIssues] = useState<Array<colorList>>(
    []
  );

  console.log(colorsWithIssues);

  React.useEffect(() => {
    parent.postMessage({ pluginMessage: { type: "request-selection" } }, "*");

    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;

      if (type === "color-stats") {
        setColorsWithIssues(message?.colorsNotUsingOneCoreColorStyle);
      }
    };
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
    parent.postMessage({ pluginMessage: { type: "request-selection" } }, "*");
  };

  return (
    <>
      <section className="color-linter-container">
        <div className="color-linting-summary">
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
        <ul className="color-tiles-container">{renderColorIssues()}</ul>
      </section>
      <footer className="color-linting-footer">
        <button
          className="btn btn-primary"
          onClick={() => handleRescanLayersClick()}
        >
          Re-scan colors
        </button>
      </footer>
    </>
  );
};

export default ColorLinter;
