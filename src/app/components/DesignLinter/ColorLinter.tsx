import * as React from "react";
import { useState } from "react";
require("babel-polyfill");
import "../../styles/ui.css";

declare function require(path: string): any;

const ColorLinter = () => {
  const [selectionColorStats, setSelectionColorStats] = useState({});
  
  debugger

  React.useEffect(() => {
    parent.postMessage({pluginMessage: {type: 'request-selection'}}, '*');
    debugger
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const {type, message} = event.data.pluginMessage;

      if (type === 'color-stats') {
                debugger
        setSelectionColorStats(message);
      }

      // if (type === "selection-change") {
      //   // Filter out text layers that have no suggestions
      //   setSelectionColorStats(message)
      // }
    };
  }, []);

  const handleColorTileClick = (layerId: string) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'select-layer',
          layerId: layerId,
        },
      },
      '*'
    );
  };

  const renderColorIssues = () => {
    const colorsWithIssues = selectionColorStats?.colorsNotUsingOneCoreColorStyle;

    const truncateLayerName = (layerName: string): string => {
      if (layerName.length > 30) {
        return layerName.substring(0, 27) + '...';
      }

      return layerName;
    };

    if (colorsWithIssues) {
      return colorsWithIssues.map((color, index) => {
        const {
          // colorId,
          layerId,
          layerName,
          // layerType,
          // colorStyleId,
          // hasColorStyle,
          // visible,
          colorType,
          colorInHex,
        } = color;

        return (
          <li className="color-tile-container" key={index} onClick={() => handleColorTileClick(layerId)}>
            <div className="color-tile-header">
              <h4>Missing One Core Color style</h4>
              <button>...</button>
            </div>

            <ul className="color-tile-meta-list">
              <li className="color-tile-meta-list-item color-tile-meta-color">
                <span style={{backgroundColor: colorInHex}} className="color-tile-color-sample"></span>
                {colorInHex}
              </li>
              <li className="color-tile-meta-list-item color-tile-meta-layer-name">
                Layer: {truncateLayerName(layerName)}
              </li>
              <li className="color-tile-meta-list-item">Type: {colorType}</li>
            </ul>

            <article className="suggested-color-styles-container">
              <div className="suggested-color-style-header">
                <h5>Suggested color styles</h5>
                <button className="suggested-color-style-help">?</button>
              </div>

              <ul className="suggested-color-style-list">
                <li className="suggested-color-style-list-itme">Text / Color / Token / Name</li>
                <li className="suggested-color-style-list-itme">Text / Color / Token / Name</li>
                <li className="suggested-color-style-list-itme">Text / Color / Token / Name</li>
                <li className="suggested-color-style-list-itme">Text / Color / Token / Name</li>
              </ul>
            </article>
          </li>
        );
      });
    }
  };

  return (
    <>
      <ul className="color-tiles-container">{renderColorIssues()}</ul>
    </>
  );
};

export default ColorLinter;
