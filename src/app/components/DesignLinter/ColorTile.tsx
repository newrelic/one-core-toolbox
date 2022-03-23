import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { PluginContext } from "../PluginContext";
import chroma from "chroma-js";
import classNames from "classnames";
import iconLayerText from "../../assets/icon-layer-text.svg";
import iconLayerEllipse from "../../assets/icon-layer-ellipse.svg";
import iconLayerLine from "../../assets/icon-layer-line.svg";
import iconLayerPolygon from "../../assets/icon-layer-polygon.svg";
import iconLayerRectangle from "../../assets/icon-layer-rectangle.svg";
import iconLayerBooleanOperation from "../../assets/icon-layer-boolean-operation.svg";
import { Icon } from "react-figma-plugin-ds";
import { Check } from "react-feather";
import "react-figma-plugin-ds/figma-plugin-ds.css";
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

interface colorStyleData {
  colorStyleKey: string;
  colorStyleName: string;
  colorStyleColor: string;
}

interface props {
  colorData: colorData;
  ignoreColorIssue: (colorId) => void;
}

const ColorTile = (props: props) => {
  const { state } = useContext(PluginContext);
  const {
    colorTokens,
    activeColorTile,
    setActiveColorTile,
    colorIssuesFixed,
    setColorIssuesFixed,
  } = state;

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
  const [issueFixed, setIssueFixed] = useState(false);

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

  const truncateLayerName = (
    layerName: string,
    length: number = 25
  ): string => {
    if (layerName.length > length) {
      return layerName.substring(0, length) + "...";
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
        .slice(0, 4);

      return mostRelevantColorStyles.map((colorStyle, index) => {
        return (
          <li
            className="suggested-color-style-list-item"
            key={index}
            onClick={(e) =>
              handleSuggestionFixClick(e, {
                colorStyleKey: colorStyle.key,
                colorStyleName: colorStyle.name,
                colorStyleColor: colorStyle.hex,
              })
            }
          >
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
            <button className="btn-suggested-color-style-cta">Apply fix</button>
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
      }, 400)
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

  const handleSuggestionFixClick = (e, colorStyleData: colorStyleData) => {
    e.stopPropagation();

    parent.postMessage(
      {
        pluginMessage: {
          type: "apply-color-style",
          colorType,
          layerId: layerId,
          originalColor: colorInHex,
          colorStyleKey: colorStyleData.colorStyleKey,
          colorStyleName: colorStyleData.colorStyleName,
          colorStyleColor: colorStyleData.colorStyleColor,
        },
      },
      "*"
    );

    handleColorTileClick(layerId);
    setIssueFixed(true);
    !issueFixed && setColorIssuesFixed(colorIssuesFixed + 1);
  };

  const layerTypeIcons = {
    TEXT: <img src={iconLayerText} className="custom-layer-icon" />,
    ELLIPSE: <img src={iconLayerEllipse} className="custom-layer-icon" />,
    FRAME: <Icon className="layer-icon" name="frame" />,
    GROUP: <Icon className="layer-icon" name="group" />,
    COMPONENT: <Icon className="layer-icon" name="component" />,
    INSTANCE: <Icon className="layer-icon" name="instance" />,
    LINE: <img src={iconLayerLine} className="custom-layer-icon" />,
    POLYGON: <img src={iconLayerPolygon} className="custom-layer-icon" />,
    RECTANGLE: <img src={iconLayerRectangle} className="custom-layer-icon" />,
    SHAPE_WITH_TEXT: <img src={iconLayerText} className="custom-layer-icon" />,
    STAR: <Icon className="custom-layer-icon" name="star-off" />,
    BOOLEAN_OPERATION: (
      <img src={iconLayerBooleanOperation} className="custom-layer-icon" />
    ),
  };

  const colorTileHeadingText = () => {
    if (issueFixed) {
      return (
        <>
          Fixed {` `} <Check color="#126440" size={17} />
        </>
      );
    } else {
      return (
        colorType.charAt(0).toUpperCase() +
        colorType.slice(1) +
        " needs One Core color style"
      );
    }
  };

  const colorTileContainerClasses = classNames("color-tile-container", {
    "menu-active": menuActive,
    "color-tile-hover-state-disabled": menuButtonHovered || menuHovered,
    expanded: isExpanded,
    "issue-fixed": issueFixed,
  });

  return (
    <li
      className={colorTileContainerClasses}
      onClick={() => handleColorTileClick(layerId)}
    >
      <div className="color-tile-header">
        <div className="color-tile-title-section">
          <h4 className="color-tile-heading">{colorTileHeadingText()}</h4>
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
              <li className="color-tile-menu-item">
                <a
                  href="https://one-core.datanerd.us/foundation/design/color/#semantic-tokens"
                  target="_blank"
                >
                  See color docs
                </a>
              </li>
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
          <li className="color-tile-meta-list-item color-tile-meta-layer-name-item">
            {layerTypeIcons[layerType]}
            <span className="color-tile-meta-layer-name">
              {truncateLayerName(layerName)}
            </span>
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
