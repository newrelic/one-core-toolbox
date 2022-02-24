import * as React from "react";
import { useState } from "react";
import chroma from "chroma-js"
import oneCorePaintStyles from '../../../plugin/oneCorePaintStyles.js';
require("babel-polyfill");

import "../../styles/ui.css";

declare function require(path: string): any;

interface colorData {
  layerId: string,
  layerName: string,
  colorType: string,
  colorInHex: string
}

interface props {
  colorData: colorData
  key: number,
}

const ColorTile = (props: props) => {
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
  } = props.colorData;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleColorTileClick = (layerId: string) => {
    setIsExpanded(!isExpanded)
  	// Tell the controller to select and zoom into it
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

  const truncateLayerName = (layerName: string): string => {
    if (layerName.length > 30) {
      return layerName.substring(0, 27) + '...';
    }

    return layerName;
  };

  const renderTokenSuggestions = () => {
    const stylesWithSimilarity = oneCorePaintStyles.map((oneCoreColorStyle) => {
      const oneCoreColor = oneCoreColorStyle.color.color.hex
      const similarity: number = 100 - chroma.distance(oneCoreColor, colorInHex)
      
      return {
        ...oneCoreColorStyle,
        similarity
      }
    })

    const stylesSortedBySimilarity = stylesWithSimilarity.sort((a, b) => {
      return b.similarity - a.similarity
    })

    const closestColorStyles = stylesSortedBySimilarity.slice(0, 4)


    return closestColorStyles.map(colorStyle => {
      return (
        <li className="suggested-color-style-list-item">
          <span 
            className="suggested-color-style-sample"
            style={{backgroundColor: colorStyle.color.color.hex}}
          ></span>
          {colorStyle.name}
        </li>
      )
    })
  }

  renderTokenSuggestions()

  return (
    <li 
    	className={`color-tile-container ${isExpanded ? 'expanded' : ''}`}
    	key={props.key} 
    	onClick={() => handleColorTileClick(layerId)}
    >
      <div className="color-tile-header">
        <div className="color-tile-title-section">
          <h4 className="color-tile-heading">Missing One Core Color style</h4>
          <button className="btn-color-tile-menu">Options</button>
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
      </div>

      <article className="suggested-color-styles-container">
        <div className="suggested-color-style-header">
          <h5 className="suggested-color-style-heading">Suggested color styles</h5>
          <button className="btn-suggested-color-style-help">Help</button>
        </div>

        <ul className="suggested-color-style-list">
          {renderTokenSuggestions()}
        </ul>
      </article>
    </li>
  );
};

export default ColorTile;