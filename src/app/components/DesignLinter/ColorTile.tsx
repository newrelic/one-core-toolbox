import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { PluginContext } from "../PluginContext";
import chroma from "chroma-js";
import classNames from "classnames";
require("babel-polyfill");

import "../../styles/ui.css";

declare function require(path: string): any;

interface colorData {
  colorId: string;
  layerId: string;
  layerName: string;
  colorType: string;
  colorInHex: string;
  layerType: string;
}

interface props {
  colorData: colorData;
  ignoreColorIssue: (colorId) => void;
}

const ColorTile = (props: props) => {
  const { state } = useContext(PluginContext);
  const { colorTokens, activeColorTile, setActiveColorTile } = state;

  const {
    colorId,
    layerId,
    layerName,
    layerType,
    // colorStyleId,
    // hasColorStyle,
    // visible,
    colorType,
    colorInHex,
  } = props.colorData;

  const { ignoreColorIssue } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [menuButtonHovered, setMenuButtonHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [menuTimer, setMenuTimer] = useState(null);

  useEffect(() => {
    if (activeColorTile === colorId) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [activeColorTile]);

  const handleColorTileClick = (layerId: string) => {
    if (!isExpanded) {
      setActiveColorTile(colorId);
    } else {
      setActiveColorTile("");
    }
    // setIsExpanded(!isExpanded);

    // Tell the controller to select and zoom into it
    parent.postMessage(
      {
        pluginMessage: {
          type: "select-layer",
          layerId: layerId,
        },
      },
      "*"
    );

    setMenuActive(false);
  };

  const truncateLayerName = (layerName: string): string => {
    if (layerName.length > 20) {
      return layerName.substring(0, 20) + "...";
    }

    return layerName;
  };

  const renderTokenSuggestions = () => {
    if (colorTokens?.length > 0) {
      let relevantColorStyles = [];
      let mostRelevantColorStyles = [];

      if (layerType === "TEXT") {
        // text styles sorted reverse alphabetically
        relevantColorStyles = colorTokens
          .filter((token) => token.name.toLowerCase().includes("text"))
          .sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            } else {
              return 1;
            }
          });
      } else if (colorType === "fill") {
        // background styles sorted reverse alphabetically
        relevantColorStyles = colorTokens
          .filter((token) => token.name.toLowerCase().includes("background"))
          .sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            } else {
              return 1;
            }
          });
      } else if (colorType === "stroke") {
        // border styles sorted reverse alphabetically
        relevantColorStyles = colorTokens
          .filter((token) => token.name.toLowerCase().includes("border"))
          .sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            } else {
              return 1;
            }
          });
      }

      // sort colors styles by proximity to source color
      mostRelevantColorStyles = relevantColorStyles
        .map((relevantColorStyle) => {
          if (relevantColorStyle.hex === "None") {
            return {
              ...relevantColorStyle,
              similarity: 0,
            };
          }
          // Add a similarity property to each relevantColorStyle
          const oneCoreColor = relevantColorStyle.hex;
          const similarity: number =
            100 - chroma.distance(oneCoreColor, colorInHex);

          return {
            ...relevantColorStyle,
            similarity,
          };
        })
        // sort them by proximity
        .sort((a, b) => {
          return b.similarity - a.similarity;
        })
        // Take the top 5 closest suggestions
        .slice(0, 7);

      return mostRelevantColorStyles.map((colorStyle, index) => {
        return (
          <li className="suggested-color-style-list-item" key={index}>
            <span
              className="suggested-color-style-sample"
              style={{ backgroundColor: colorStyle.hex }}
            ></span>
            <div className="suggested-color-style-primary-content">
              <h5 className="suggested-color-style-heading">
                {colorStyle.name}
              </h5>
              <p className="suggested-color-style-description">
                {colorStyle.description}
              </p>
            </div>
            <button
              className="btn-suggested-color-style-cta"
              onClick={(e) => handleSuggestionFixClick(e, colorStyle.key)}
            >
              Apply fix
            </button>
          </li>
        );
      });
    }
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuActive(!menuActive);
  };

  const handleBtnMenuMouseEnter = () => {
    setMenuButtonHovered(true);
    clearTimeout(menuTimer);
  };

  const handleBtnMenuMouseLeave = () => {
    setMenuButtonHovered(false);

    setMenuTimer(
      setTimeout(() => {
        setMenuActive(false);
      }, 200)
    );

    return () => clearTimeout(menuTimer);
  };

  const handleMenuMouseEnter = () => {
    setMenuHovered(true);
    clearTimeout(menuTimer);
  };

  const handleMenuMouseLeave = () => {
    setMenuHovered(false);

    setMenuTimer(
      setTimeout(() => {
        setMenuActive(false);
      }, 200)
    );

    return () => clearTimeout(menuTimer);
  };

  const handleIgnoreIssueClick = (e) => {
    e.stopPropagation();
    ignoreColorIssue(colorId);
    setMenuActive(false);
  };

  const handleSuggestionFixClick = (e, colorStyleKey: string) => {
    e.stopPropagation();

    parent.postMessage(
      {
        pluginMessage: {
          type: "apply-color-style",
          layerId: layerId,
          colorStyleKey,
        },
      },
      "*"
    );
  };

  const colorTileContainerClasses = classNames("color-tile-container", {
    "menu-active": menuActive,
    "color-tile-hover-state-disabled": menuButtonHovered || menuHovered,
    expanded: isExpanded,
  });

  return (
    <li
      className={colorTileContainerClasses}
      onClick={() => handleColorTileClick(layerId)}
    >
      <div className="color-tile-header">
        <div className="color-tile-title-section">
          <h4 className="color-tile-heading">Missing One Core Color style</h4>
          <button
            className="btn-color-tile-menu"
            onClick={(e) => handleMenuClick(e)}
            onMouseEnter={() => handleBtnMenuMouseEnter()}
            onMouseLeave={() => handleBtnMenuMouseLeave()}
          >
            Options
          </button>
          <div
            className="color-tile-menu"
            onMouseEnter={() => handleMenuMouseEnter()}
            onMouseLeave={() => handleMenuMouseLeave()}
          >
            <ul className="color-tile-menu-items">
              <li
                className="color-tile-menu-item"
                onClick={() => handleColorTileClick(layerId)}
              >
                Select layer
              </li>
              <li
                className="color-tile-menu-item"
                onClick={(e) => handleIgnoreIssueClick(e)}
              >
                Ignore issue
              </li>
            </ul>
            <hr />
            <ul className="color-tile-menu-items">
              <li className="color-tile-menu-item">How to fix?</li>
            </ul>
          </div>
        </div>

        <ul className="color-tile-meta-list">
          <li className="color-tile-meta-list-item color-tile-meta-color">
            <span
              style={{ backgroundColor: colorInHex }}
              className="color-tile-color-sample"
            ></span>
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
          <h5 className="suggested-color-style-heading">
            Suggested color styles
          </h5>
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
