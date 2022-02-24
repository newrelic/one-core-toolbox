import * as React from "react";
import { useState } from "react";
import ColorTile from './ColorTile'
require("babel-polyfill");
import "../../styles/ui.css";

declare function require(path: string): any;

const ColorLinter = () => {
  const [selectionColorStats, setSelectionColorStats] = useState({});

  React.useEffect(() => {
    parent.postMessage({pluginMessage: {type: 'request-selection'}}, '*');

    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const {type, message} = event.data.pluginMessage;

      if (type === 'color-stats') {
        setSelectionColorStats(message);
      }
    };
  }, []);

  const renderColorIssues = () => {
    const colorsWithIssues = selectionColorStats?.colorsNotUsingOneCoreColorStyle;

    if (colorsWithIssues) {
      return colorsWithIssues.map((color, index) => {
        return <ColorTile colorData={color} key={index} />
      });
    }
  };

  return (
    <>
      <ul className="color-tiles-container">
        {renderColorIssues()}
      </ul>
    </>
  );
};

export default ColorLinter;
