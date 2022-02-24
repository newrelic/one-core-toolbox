import * as React from "react";
import { useState } from "react";
import ColorTile from './ColorTile'
require("babel-polyfill");
import "../../styles/ui.css";

declare function require(path: string): any;

const ColorLinter = () => {
  const [colorsWithIssues, setColorsWithIssues] = useState({});

  React.useEffect(() => {
    parent.postMessage({pluginMessage: {type: 'request-selection'}}, '*');

    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const {type, message} = event.data.pluginMessage;

      if (type === 'color-stats') {
        setColorsWithIssues(message?.colorsNotUsingOneCoreColorStyle)
      }
    };




  }, []);

  const renderColorIssues = () => {
    if (colorsWithIssues?.length > 0) {
      return colorsWithIssues.map((color, index) => {
        return <ColorTile colorData={color} key={index} />
      });
    }
  };

  return (
    <>
      <div className="color-linter-container">
        <div className="color-linting-summary">
          <h3 className="color-linting-summary-heading">
            {colorsWithIssues.length} color issues found
          </h3>
          <p className="color-linting-summary-description">
            To fix these issues, replace each of the colors listed below 
            with a One Core color style. Not sure what that means?{` `}
            <a href="#">See how</a>.
          </p>
        </div> 
        <ul className="color-tiles-container">
          {renderColorIssues()}
        </ul>
      </div>      
    </>
  );
};

export default ColorLinter;
