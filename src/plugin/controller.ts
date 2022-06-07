import uuid from "uuid-random";
import { isVisibleNode } from "@figma-plugin/helpers";
import { toCapitalizedString } from "../app/components/utility-functions";
import rawLightColorTokens from "../../data/light-mode.json";
import rawDarkColorTokens from "../../data/dark-mode.json";

// Set the size of the plugin window
let uiSize = {
  width: 300,
  height: 448,
};

// ==============================================================
// Table creator functions
// ==============================================================
const createTable = async (msg) => {
  const tableFrame = figma.createFrame();
  let headerCell = await figma.importComponentByKeyAsync(
    "ce8fa8e8cab07a19f83f4181ac8cbe76093c6bc3"
  );
  let tableRow = figma.createComponent();
  let cellFillContainerY = false;

  await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  tableFrame.name = "Table";
  tableFrame.fills = [];
  tableFrame.counterAxisSizingMode = "AUTO";
  tableFrame.layoutMode = "VERTICAL";
  tableFrame.x = figma.viewport.center.x;
  tableFrame.y = figma.viewport.center.y;

  // if any cell is set to Multi-value, set a variable we'll use later
  msg.columnConfiguration.find((col) => (cellFillContainerY = col.multiValue));

  [...Array(msg.rows + 1).keys()].map((rowIndex) => {
    tableRow.layoutMode = "HORIZONTAL";
    tableRow.counterAxisSizingMode = "AUTO";
    tableRow.name = "Row";
    // tableRow.layoutAlign = 'SgMode = 'FIXED';

    msg.columnConfiguration.forEach(async (col) => {
      let {
        name: colName,
        alignment: colAlignment,
        cellType: colCellType,
        multiValue: colMultiValue,
      } = col;

      // Because this is how the variant properties are formatted :(
      colAlignment = toCapitalizedString(colAlignment);
      colCellType = toCapitalizedString(colCellType);
      colMultiValue = toCapitalizedString(colMultiValue);

      // Set header cell configuration
      if (rowIndex === 0) {
        let thisHeaderCell = headerCell.createInstance();
        let textNodeOfHeaderCell = (thisHeaderCell.children[0] as InstanceNode)
          .children[0] as TextNode;
        const isFavoriteCol = colCellType === "Favorite";
        const hasCustomColName = colName.length;
        console.log(colName.length);

        const setHeaderTextCharacters = (newChars: string) => {
          textNodeOfHeaderCell.deleteCharacters(
            0,
            textNodeOfHeaderCell.characters.length
          );
          textNodeOfHeaderCell.insertCharacters(0, newChars);
        };

        // Set column layer name and label text
        if (hasCustomColName) {
          thisHeaderCell.name = colName;
          setHeaderTextCharacters(colName);
        } else {
          thisHeaderCell.name = "Header";
          setHeaderTextCharacters("Header");
        }

        // If it's favorite col, don't show header text or arrows
        if (isFavoriteCol) {
          const arrowsLayer = thisHeaderCell.findOne(
            (child) => child.name === "Arrows"
          );

          arrowsLayer.visible = false;
          setHeaderTextCharacters(" ");
        }

        thisHeaderCell.setProperties({ Alignment: colAlignment });

        const determineHeaderCellWidth = () => {
          if (msg.isMultiValue) return 120;
          if (colCellType === "Entity") return 102;

          return thisHeaderCell.width;
        };

        // Set the width on each header cell
        thisHeaderCell.resize(
          determineHeaderCellWidth(),
          thisHeaderCell.height
        );

        // if any cell is set to Multi-value then make all of them "fill container" vertically
        (thisHeaderCell.children[0] as FrameNode).layoutGrow =
          cellFillContainerY ? 1 : 0;
        thisHeaderCell.primaryAxisSizingMode = cellFillContainerY
          ? "FIXED"
          : "AUTO";
        thisHeaderCell.counterAxisSizingMode = isFavoriteCol ? "AUTO" : "FIXED";
        tableRow.appendChild(thisHeaderCell);
      }
    });

    if (rowIndex === 0) {
      tableFrame.appendChild(tableRow);
    } else {
      // configure all rows except headers
      let thisTableRow = tableRow.createInstance();

      // thisTableRow.layoutAlign = 'STRETCH'
      // thisTableRow.primaryAxisSizingMode = 'FIXED';

      thisTableRow.children.map((cell, index) => {
        cell = cell as InstanceNode;
        let { cellType: colCellType, multiValue: colMultiValue } =
          msg.columnConfiguration[index];

        const cellTypesThatCanBeMultiValue = [
          "Text",
          "Metric",
          "Entity",
          "Link",
        ];
        const tableMultiValue = toCapitalizedString(msg.isMultiValue);

        // Because this is how the variant properties are formatted :(
        colCellType = toCapitalizedString(colCellType);
        colMultiValue = toCapitalizedString(colMultiValue);
        const colCanBeMultiValue = cellTypesThatCanBeMultiValue.some(
          (cellType) => cellType === colCellType
        );

        cell.name === "Header" ? (cell.name = "Cell") : null;
        cell.setProperties({ Type: "Body" });
        (
          (cell.children[0] as FrameNode).children[0] as InstanceNode
        ).setProperties({
          Type: colCellType,
          "Multi-value": colCanBeMultiValue ? tableMultiValue : "False",
        });

        cell.counterAxisSizingMode = "FIXED";

        // If it's a multiValue table then set the visibility of this col's
        // additional value
        if (msg.isMultiValue && colMultiValue === "False") {
          if (!colCanBeMultiValue) return;

          const additionalValueLayer = cell.findOne(
            (child) => child.name === "Secondary value" && child.type === "TEXT"
          );

          (additionalValueLayer as TextNode).characters = " ";
        }

        // Because cells can be reset here as they're replaced with another
        // component (variants), we again set the fill container setting if
        // any of the columns is set to "multi value"
        (cell.children[0] as FrameNode).layoutGrow = cellFillContainerY ? 1 : 0;
        cell.primaryAxisSizingMode = cellFillContainerY ? "FIXED" : "AUTO";
      });

      tableFrame.appendChild(thisTableRow);
    }
  });

  let tableData = {
    fileName: figma.currentPage.parent.name,
    fileKey: figma.fileKey,
    "Column count": msg.columnConfiguration.length,
    "Row count": msg.rows,
    "Column Configuration": msg.columnConfiguration,
    ...customEventData,
  };

  figma.ui.postMessage({ type: "table-created", message: tableData });

  figma.notify("Table created ✅");
};

// ==============================================================
// Language linter functions
// ==============================================================
const pushTextLayerToArray = (layer, array) => {
  array.push({
    id: layer.id,
    name: layer.name,
    visible: layer.visible,
    x: layer.x,
    y: layer.y,
    type: layer.type,
    characters: layer?.characters,
    children: layer?.children,
  });
};

const sendCurrentTextSelection = () => {
  // get the selected layers
  let selection = figma.currentPage.selection;

  // initialize an variable that we'll store our output in
  // as we loop over the selected layers
  let textLayers = [];

  // for each selected layer
  selection.forEach((selectedLayer) => {
    // If the layer has children
    if (!!(selectedLayer as FrameNode)?.children) {
      // get all of the children of the layer that are text layers
      const selectedTextLayers = (selectedLayer as FrameNode).findAll(
        (n) => n.type === "TEXT"
      );

      // Add any children that are text layers to the output array
      selectedTextLayers.forEach((layer) => {
        isVisibleNode(layer) && pushTextLayerToArray(layer, textLayers);
      });
    } else if (selectedLayer.type === "TEXT") {
      isVisibleNode(selectedLayer) &&
        pushTextLayerToArray(selectedLayer, textLayers);
    }
  });

  // send the selection array to the UI
  return figma.ui.postMessage({
    type: "new-text-selection",
    message: {
      textLayers,
      selectedLayers: selection,
    },
  });
};

// ==============================================================
// Color linter function
// ==============================================================
const rgbToHex = (r, g, b) => {
  const componentToHex = (c) => {
    c = Math.round(c * 255);
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const combineComponents = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  return combineComponents(r, g, b);
};

// Utility function for pushing a color into an array
// it's just saving me from repeating myself a bit
const pushColorToArray = (
  layer,
  colorType: string,
  array: any[],
  layerHasSegmentStyles: Boolean = false
) => {
  const styleIdType = colorType === "fills" ? "fillStyleId" : "strokeStyleId";
  const isSolidColor = layer?.fills[0]?.type === "SOLID";
  const colorIsImage =
    colorType === "fills" && layer?.fills[0]?.type === "IMAGE";
  const colorIsGradient =
    colorType === "fills" && layer?.fills[0]?.type.includes("GRADIENT");
  const colorIsVisible = layerHasSegmentStyles
    ? true
    : layer[colorType][0].visible;
  const colorInHex = (colorInRGB) => {
    return rgbToHex(colorInRGB.r, colorInRGB.g, colorInRGB.b);
  };
  const segmentColorInHex = layerHasSegmentStyles
    ? colorInHex(layer.segment.fills[0].color)
    : false;
  const hasColorStyle = () => {
    if (layerHasSegmentStyles) {
      return layer.segment.fillStyleId.length > 0;
    } else {
      return isSolidColor ? layer[styleIdType].length > 0 : false;
    }
  };

  if (
    !colorIsImage &&
    !colorIsGradient &&
    colorIsVisible &&
    !layer.isChildOfIconWithFill
  ) {
    array.push({
      colorId: uuid(), // generate a Unique ID to keep track of colors,
      layerId: layer.layerId,
      layerName: layer.name,
      layerType: layer.type,
      color: layerHasSegmentStyles ? layer.segment.fills[0] : layer[colorType],
      colorStyleId: layerHasSegmentStyles
        ? layer.segment.fillStyleId
        : layer[styleIdType],
      // if it's a gradient assume it doesn't have a color style
      // Unsafe assumption? Yes. Time saver? Yes.
      hasColorStyle: hasColorStyle(),
      visible: layer.visible,
      colorType: colorType.slice(0, -1), // it's plural, make it singular
      colorInHex: layerHasSegmentStyles
        ? segmentColorInHex
        : colorInHex(layer[colorType][0].color),
      layerHasSegmentStyles: layerHasSegmentStyles,
      segment: layerHasSegmentStyles && layer.segment,
    });
  }
};

let colorTokens = [];

// Add hex values to colorTokens objects
const getColorTokens = async (mapThemesToEachOther: Boolean) => {
  let lightThemeTokens = await Promise.all(
    rawLightColorTokens.meta.styles.map(async (style) => {
      return {
        ...style,
        theme: "light",
      };
    })
  );
  let darkThemeTokens = await Promise.all(
    rawDarkColorTokens.meta.styles.map(async (style) => {
      return {
        ...style,
        theme: "dark",
      };
    })
  );

  // Add a `lightThemeToken` or `darkThemeToken` to each token
  // so we know which token to swap it for in the theme switcher
  if (mapThemesToEachOther) {
    // For every light theme token...
    lightThemeTokens = lightThemeTokens.map((token) => {
      // Check for a dark theme token with a matching name
      const darkThemeToken = darkThemeTokens.filter(
        (darkToken) => token.name.toLowerCase() === darkToken.name.toLowerCase()
      );

      // Return the token with a new `darkThemeToken` property
      return {
        ...token,
        darkThemeToken: darkThemeToken[0]?.key ? darkThemeToken[0].key : null,
      };
    });

    // For every dark theme token...
    darkThemeTokens = darkThemeTokens.map((token) => {
      // Check for a dark theme token with a matching name
      const lightThemeToken = lightThemeTokens.filter(
        (lightToken) =>
          token.name.toLowerCase() === lightToken.name.toLowerCase()
      );

      // Return the token with a new `lightThemeToken` property
      return {
        ...token,
        lightThemeToken: lightThemeToken[0]?.key
          ? lightThemeToken[0].key
          : null,
      };
    });
  }

  const allColorTokens = lightThemeTokens.concat(darkThemeTokens);
  const tempRectangle = figma.createRectangle();

  colorTokens = await Promise.all(
    allColorTokens.map(async (style) => {
      // Create a rectangle which we'll apply the token to
      // in order to get it's hex value
      tempRectangle.visible = false;

      let colorStyleWithHex = {};

      // Apply the token to `tempRectangle`
      const importedStyle = await figma.importStyleByKeyAsync(style.key);
      tempRectangle.fillStyleId = importedStyle.id;

      // Set the colorStyleWithHex prop for this token
      if (tempRectangle.fills[0].color !== undefined) {
        colorStyleWithHex = {
          ...style,
          hex: rgbToHex(
            tempRectangle.fills[0].color.r,
            tempRectangle.fills[0].color.g,
            tempRectangle.fills[0].color.b
          ),
        };
      } else {
        colorStyleWithHex = {
          ...style,
          hex: "None", // Currently, some colors in the file are empty & listed as "TBD"
        };
      }

      return colorStyleWithHex;
    })
  );

  // remove the rectangle from the document
  tempRectangle.remove();
};

const getColorStats = async (forThemeSwitcher: Boolean = false) => {
  // Set for performance:
  // https://www.figma.com/plugin-docs/accessing-document/#optimizing-traversals
  figma.skipInvisibleInstanceChildren = true;

  await getColorTokens(true);
  const getRawLayersWithColor = () => {
    // get the selected layers
    let selection = figma.currentPage.selection;

    const relevantLayers: SceneNode[][] = selection.map((selectedLayer) => {
      // Get all styles in selection that have a color
      // (the output will have a lot of data stored in prototype properties)

      let outputForLayersWithChildren: SceneNode[] = [];

      const isRelevantLayer = (n) => {
        let acceptableNodetypes = [
          "ELLIPSE",
          "FRAME",
          "GROUP",
          "COMPONENT",
          "INSTANCE",
          "LINE",
          "POLYGON",
          "RECTANGLE",
          "SHAPE_WITH_TEXT",
          "STAR",
          "TEXT",
          "BOOLEAN_OPERATION",
          // 'VECTOR'
        ];

        const hasFill = "fills" in n && n?.fills[0] !== undefined;
        const hasStroke = "strokes" in n && n?.strokes[0] !== undefined;
        // Because boolean options have their own fill that applies to all children
        const isChildOfBooleanOperation = n.parent.type === "BOOLEAN_OPERATION";

        // Check for segments of text styled differently
        const textLayerHasSegmentStyles = () => {
          if (n.type !== "TEXT") {
            return false;
          } else {
            return n.getStyledTextSegments(["fills"]).length > 1;
          }
        };

        // If this function is being run for the Theme switcher, be sure
        // to include Vector layers so they aren't left unconverted to
        // the chosen theme.
        forThemeSwitcher && acceptableNodetypes.push("VECTOR");

        const hasFillOrStroke = hasFill || hasStroke;
        const nodeIsValidNodeType = acceptableNodetypes.some(
          (nodeType) => n.type === nodeType
        );

        return (
          nodeIsValidNodeType &&
          (hasFillOrStroke || textLayerHasSegmentStyles()) &&
          !isChildOfBooleanOperation
        );
      };

      // return the layer if it fit's the criteria of isRelevantLayer()
      const selectedLayerHasChildren =
        "findAll" in selectedLayer && selectedLayer?.children?.length > 0;

      if (selectedLayerHasChildren) {
        // if it has children
        isRelevantLayer(selectedLayer);
        outputForLayersWithChildren = selectedLayer.findAll((n) =>
          isRelevantLayer(n)
        );

        if (!isRelevantLayer(selectedLayer)) {
          return [...outputForLayersWithChildren];
        } else {
          return [selectedLayer, ...outputForLayersWithChildren];
        }
      } else if (isRelevantLayer(selectedLayer)) {
        // if it's a single layer
        return [selectedLayer];
      } else {
        return [];
      }
    });

    let output = relevantLayers.flat();
    output = output.filter((layer) => isVisibleNode(layer));

    return output;
  };

  /*-------------------------*/
  /*-- Meat and potatoes --*/
  /*-------------------------*/

  // Get all styles in figma doc that have a color
  // (the output will have a lot of data stored in prototype properites)
  // (To check colors for entire file, swap `figma.currentPage.selection`
  // `for figma.root`)
  const rawLayersWithColor = getRawLayersWithColor();

  // Pull out the data taht we care about and make it accessible
  // without needing to access prototype properties.
  const layersWithColor = rawLayersWithColor.map((layer) => {
    const hasFill = "fills" in layer && layer.fills[0] !== undefined;
    const hasStroke = "strokes" in layer && layer.strokes[0] !== undefined;
    const textLayerHasSegmentStyles =
      layer.type === "TEXT" &&
      layer.getStyledTextSegments(["fills"]).length > 1;
    const hasFillAndStroke = hasFill && hasStroke;
    const isChildOfIcon = layer.parent.type === "BOOLEAN_OPERATION";
    let parentIconHasFill = false;
    const isChildOfIconWithFill = isChildOfIcon && parentIconHasFill;

    const checkParentForFill = () => {
      if ("fills" in layer.parent) {
        parentIconHasFill = (layer.parent.fills as []).length > 0;
      }
    };

    checkParentForFill();

    return {
      layerId: layer.id,
      name: layer.name,
      fills: "fills" in layer && layer.fills,
      strokes: "strokes" in layer && layer.strokes,
      fillStyleId: "fillStyleId" in layer && layer.fillStyleId,
      strokeStyleId: "strokeStyleId" in layer && layer.strokeStyleId,
      visible: layer.visible,
      type: layer.type,
      hasFill: hasFill,
      hasStroke: hasStroke,
      hasFillAndStroke: hasFillAndStroke,
      isChildOfIconWithFill: isChildOfIconWithFill,
      hasSegmentStyles: textLayerHasSegmentStyles,
    };
  });

  const allInstancesOfColor = layersWithColor
    .map((layer) => {
      let tempColors = [];

      // get all each fill and stroke that isn't empty and add it
      // as an item in a new flat array containing all color instances
      if (layer.hasFillAndStroke) {
        pushColorToArray(layer, "fills", tempColors);
        pushColorToArray(layer, "strokes", tempColors);
      } else if (layer.hasFill) {
        pushColorToArray(layer, "fills", tempColors);
      } else if (layer.hasStroke) {
        pushColorToArray(layer, "strokes", tempColors);
      } else if (layer.hasSegmentStyles) {
        const node = figma.getNodeById(layer.layerId) as TextNode;
        const segmentedFills = node.getStyledTextSegments(["fills"]);

        // Store the fillStyleId in the segment
        segmentedFills.forEach((segment) => {
          const fillStyleId = node.getRangeFillStyleId(
            segment.start,
            segment.end
          );
          const segmentToBePushed = { ...segment, fillStyleId };
          const layerToBePushed = { ...layer, segment: segmentToBePushed };

          pushColorToArray(layerToBePushed, "fills", tempColors, true);
        });
      }

      return tempColors;
    })
    .flat();

  // Checklist for verifying that a layers uses a One Core color style
  // 1. If it's a fill, it's `fillStyleId` isn't an empty string (likewise if it's a stroke but for `strokeStyleId`)
  // 2. The key extracted from it's (fill/stroke)styleId matches a key from the `colorTokens` array

  // This will give you the total number of colors that use a color style
  // const amountOfColorsUsingColorStyle = allInstancesOfColor.reduce((prev, color, index) => {
  //   return color.hasColorStyle ? prev + 1 : prev
  // }, 0)

  // If it's color matches a One Core color add it an array
  const colorsUsingOneCoreStyle = allInstancesOfColor
    .filter((color) => {
      return colorTokens.some((oneCoreColor) => {
        return color.colorStyleId.includes(oneCoreColor.key);
      });
    })
    .map((color) => {
      // Save the one core token as property on the color object
      let oneCoreToken = undefined;

      colorTokens.forEach((oneCoreColor) => {
        if (color.colorStyleId.includes(oneCoreColor.key)) {
          oneCoreToken = oneCoreColor;
        }
      });

      return {
        ...color,
        token: oneCoreToken,
      };
    });

  const oneCoreColorStyleCoverage = `${(
    (colorsUsingOneCoreStyle.length / allInstancesOfColor.length) *
    100
  ).toFixed(0)}%`;

  if (forThemeSwitcher) {
    return {
      colorsUsingOneCoreStyle,
      allInstancesOfColor,
      oneCoreColorStyleCoverage,
    };
  }

  // for each color that has a color style
  const colorsWithColorStyle = allInstancesOfColor.filter((color) => {
    return color.hasColorStyle;
  });

  // Every color that isn't using a one core color style
  // loop through all colors...
  const colorsNotUsingOneCoreColorStyle = allInstancesOfColor.filter(
    (color) => {
      return !colorTokens.some((oneCoreColor) => {
        return color.colorStyleId.includes(oneCoreColor.key);
      });
    }
  );

  const idsOfAllInstancesOfColor = allInstancesOfColor.map(
    (color) => color.colorId
  );

  const colorStats = {
    selectedLayersWithColor: rawLayersWithColor,
    allInstancesOfColor: allInstancesOfColor,
    colorsWithColorStyle: colorsWithColorStyle,
    colorsUsingOneCoreStyle: colorsUsingOneCoreStyle,
    colorsNotUsingOneCoreColorStyle: colorsNotUsingOneCoreColorStyle,
    oneCoreColorStyleCoverage: oneCoreColorStyleCoverage,
    idsOfAllInstancesOfColor: idsOfAllInstancesOfColor,
  };

  return colorStats;
};

const selectAndZoomToLayer = (layerId: string) => {
  const layer: SceneNode = figma.getNodeById(layerId) as SceneNode;

  figma.currentPage.selection = [layer];
  figma.viewport.scrollAndZoomIntoView([layer]);
};

// ==============================================================
// Theme switcher
// ==============================================================

// Define the notification here so we can cancel it later
let themeSwitchedNotification = undefined;

const switchToTheme = async (
  theme: "light" | "dark",
  closeAfterRun: Boolean = false
) => {
  if (closeAfterRun) {
    figma.showUI(__html__, { width: 70, height: 0 });
  } else {
    figma.ui.postMessage({ type: `loading-${theme}-theme-switch` });
  }

  // Check for a selection. If none exists, show error notification.
  if (figma.currentPage.selection.length === 0) {
    // If the notification is already set, turn it off
    themeSwitchedNotification && themeSwitchedNotification?.cancel();

    figma.notify("Select some layers before choosing a theme", { error: true });
    return closeAfterRun && figma.closePlugin();
  }

  // If the notification is already set, turn it off
  themeSwitchedNotification && themeSwitchedNotification?.cancel();

  // Tell the user we're working on the theme change
  const loadingNotification = figma.notify(
    `Converting selection to ${theme} mode...`
  );

  // Get the list of colors that are using one core color styles
  const colorStats = await getColorStats(true);

  let importedStyles = [];
  let keysToLoad: () => string[] = () => {
    let keys = [];

    colorStats.colorsUsingOneCoreStyle.forEach((color) => {
      if ("theme" in color.token && color.token?.theme !== theme) {
        const keyOfTokenInOppositeTheme =
          theme === "light"
            ? color.token.lightThemeToken
            : color.token.darkThemeToken;
        const keyIsNotDuplicate = !keys.some(
          (key) => key === keyOfTokenInOppositeTheme
        );

        // Check to see if there's an available token to switch to
        if (keyOfTokenInOppositeTheme === null) {
          console.error(
            `Missing token: No ${theme} theme token found for "${color.token.name}".`
          );
          return;
        }

        // Add it to the keys array if it's not already there
        keyIsNotDuplicate && keys.push(keyOfTokenInOppositeTheme);
      }
    });

    return keys;
  };

  // Fetch the tokens
  importedStyles = await Promise.all(
    keysToLoad().map(async (key) => figma.importStyleByKeyAsync(key))
  );

  // Replace every one core color style with it's
  // dark mode equivalent
  for (const color of colorStats.colorsUsingOneCoreStyle) {
    if ("theme" in color.token && color.token?.theme !== theme) {
      const node = figma.getNodeById(color.layerId);
      const keyOfTokenInOppositeTheme =
        theme === "light"
          ? color.token.lightThemeToken
          : color.token.darkThemeToken;

      const importedStyle: BaseStyle = importedStyles.filter(
        (style) => style.key === keyOfTokenInOppositeTheme
      )[0];

      // Check to see if there's an available token to switch to
      if (keyOfTokenInOppositeTheme === null) {
        console.error(
          `Missing token: No ${theme} theme token found for "${color.token.name}".`
        );
        return;
      }

      // Get ready to set the token on the layer
      // First, check to see if the layer has segment styles
      if (color.layerHasSegmentStyles) {
        (node as TextNode).setRangeFillStyleId(
          color.segment.start,
          color.segment.end,
          importedStyle.id
        );
      } else {
        // Set the token on the layer
        node[`${color.colorType}StyleId`] = importedStyle.id;
      }
    }
  }

  loadingNotification.cancel();

  const coverageAsInteger = colorStats.oneCoreColorStyleCoverage.substring(
    0,
    colorStats.oneCoreColorStyleCoverage.length - 1
  );
  const isErrorWorthy = parseInt(coverageAsInteger) < 50;

  if (colorStats.oneCoreColorStyleCoverage === "100%") {
    themeSwitchedNotification = figma.notify(
      `${theme === "light" ? "🔆" : "🌙"} Selection set to ${theme} mode`
    );
  } else {
    themeSwitchedNotification = figma.notify(
      `✋ Warning: Only ${colorStats.oneCoreColorStyleCoverage} converted to 
      ${theme} mode because some colors aren't using One Core color styles.`,
      { timeout: isErrorWorthy ? 999999999 : 15000, error: isErrorWorthy }
    );
  }

  figma.ui.postMessage({
    type: "theme-switched",
    message: {
      switchedTo: theme,
      closeAfterRun,
      colorsUsingOneCoreStyle: colorStats.colorsUsingOneCoreStyle.length,
      colorsSelected: colorStats.allInstancesOfColor.length,
      colorsSwitched: colorStats.oneCoreColorStyleCoverage,
      ...customEventData,
    },
  });
};

// ==============================================================
// Handle navigation
// ==============================================================

// Used to send a custom event to New Relic

const fileName = encodeURIComponent(figma.currentPage.parent.name);
const currentSelection = figma.currentPage.selection;
const currentNodeId = encodeURIComponent(
  currentSelection.length > 0 ? currentSelection[0].id : figma.currentPage.id
);

const fileUrl = `https://figma.com/file/${figma.fileKey}/${fileName}?node-id=${currentNodeId}`;

let customEventData = {
  fileName: figma.currentPage.parent.name,
  fileKey: figma.fileKey,
  // setting them in title case because that's how
  // I did it originally and though I regret it,
  // I don't want to lose track of historical data
  "User Name": figma.currentUser.name,
  "User Avatar": figma.currentUser.photoUrl,
  "User ID": figma.currentUser.id,
  "Session ID": figma.currentUser.sessionId,
  fileUrl,
};

// handle submenu navigation
const navigateTo = (screen: string) => {
  figma.ui.postMessage({
    type: "figma-command",
    message: {
      openedTo: screen,
      ...customEventData,
    },
  });
};

switch (figma.command) {
  case "open-home":
    figma.showUI(__html__, { themeColors: true, width: 300, height: 448 });
    navigateTo("open-home");
    break;
  case "open-table-creator":
    figma.showUI(__html__, { themeColors: true, width: 300, height: 448 });
    navigateTo("open-table-creator");
    break;
  case "theme-switcher-to-light":
    switchToTheme("light", true);
    break;
  case "theme-switcher-to-dark":
    switchToTheme("dark", true);
    break;
  case "open-language-linter":
    figma.showUI(__html__, { themeColors: true, width: 475, height: 500 });
    navigateTo("open-language-linter");
    break;
  case "open-color-linter":
    figma.showUI(__html__, { themeColors: true, width: 475, height: 500 });
    navigateTo("open-color-linter");
    break;
}

// ==============================================================
// Receiving messages sent from the UI
// ==============================================================

figma.ui.onmessage = async (msg) => {
  /*-- Handle tab navigation messages --*/
  if (msg.type === "navigate-to-tab") {
    switch (msg.tabClicked) {
      case "home":
        uiSize = {
          width: 300,
          height: 448,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-home");
        break;
      case "table-creator":
        uiSize = {
          width: 300,
          height: 448,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-table-creator");
        break;
      case "language-linter":
        sendCurrentTextSelection();
        uiSize = {
          width: 475,
          height: 500,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-language-linter");
        break;
      case "color-linter":
        uiSize = {
          width: 475,
          height: 500,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-color-linter");
        break;
    }
  }
  if (msg.type == "display-error") {
    figma.notify(msg.content, { error: true });
  }

  if (msg.type === "initialize-selection") {
    figma.ui.postMessage({
      type: "initial-selection",
      message: figma.currentPage.selection,
    });
  }

  if (msg.type === "close-plugin") {
    figma.closePlugin();
  }

  /*-- Table creator messages --*/
  if (msg.type === "create-table") {
    createTable(msg);
  }

  /*-- Language linter messages --*/
  if (msg.type === "run-language-linter") {
    sendCurrentTextSelection();
  }

  if (msg.type === "request-local-custom-dictionary") {
    figma.clientStorage
      .getAsync("languageLinterCustomDictionary")
      .then((result) => {
        figma.ui.postMessage({
          type: "local-custom-dictionary-retrieved",
          message: result ? result : [],
        });
      });
  }

  if (msg.type === "add-to-dictionary") {
    figma.clientStorage
      .getAsync("languageLinterCustomDictionary")
      .then((result) => {
        let newCustomDictionary = result ? result : [];

        newCustomDictionary.push(msg.wordToAdd);

        figma.clientStorage.setAsync(
          "languageLinterCustomDictionary",
          newCustomDictionary
        );
      });
  }

  if (msg.type === "get-sample-text") {
    const sampleText = figma.currentPage.selection;
    figma.ui.postMessage({ type: "sample-text", message: sampleText });
  }

  // scroll and zoom the active layer into the center of the screen
  if (msg.type === "sample-text-changed") {
    selectAndZoomToLayer(msg.activeNodeId);
  }

  if (msg.type === "update-source-text") {
    const activeTextLayer = figma.getNodeById(msg.layerId) as TextNode;
    let fontName = activeTextLayer.fontName;

    if (fontName === figma.mixed) {
      // process each character individually
      // or simply get the color of the first character
      await Promise.all(
        activeTextLayer
          .getRangeAllFontNames(0, activeTextLayer.characters.length)
          .map(figma.loadFontAsync)
      );
    } else {
      await figma.loadFontAsync(fontName);
    }

    activeTextLayer.deleteCharacters(0, activeTextLayer.characters.length);
    activeTextLayer.insertCharacters(0, msg.updatedText);

    figma.ui.postMessage({
      type: "source-text-updated",
      message: msg.updatedText,
    });
  }

  if (msg.type === "text-linted") {
    figma.ui.postMessage({
      type: "text-linted",
      message: {
        customEventData,
        minimalReport: msg.minimalReport,
        fullReport: msg.fullReport,
      },
    });
  }

  /*-- Color linter messages --*/
  const sendColorData = async () => {
    await getColorTokens(false);

    const colorStats = await getColorStats();

    figma.ui.postMessage({
      type: "color-stats",
      message: {
        ...customEventData,
        colorStats: colorStats,
        colorTokens: colorTokens,
        selectionMade: figma.currentPage.selection.length > 0,
      },
    });
  };
  if (msg.type === "run-color-linter") {
    sendColorData();
  }

  if (msg.type === "select-layer") {
    selectAndZoomToLayer(msg.layerId);
  }

  if (msg.type === "apply-color-style") {
    figma.importStyleByKeyAsync(msg.colorStyleKey).then((imported) => {
      figma.getNodeById(msg.layerId)[`${msg.colorType}StyleId`] = imported.id;

      figma.ui.postMessage({
        type: "color-replaced",
        message: {
          ...customEventData,
          layerId: msg.layerId,
          layerName: figma.getNodeById(msg.layerId).name,
          originalColor: msg.originalColor,
          colorStyleKey: msg.colorStyleKey,
          colorStyleName: msg.colorStyleName,
          colorStyleColor: msg.colorStyleColor,
        },
      });
    });
  }

  if (msg.type === "resize") {
    figma.ui.resize(
      msg.size.x >= uiSize.width ? msg.size.x : uiSize.width,
      msg.size.y >= uiSize.height ? msg.size.y : uiSize.height
    );
  }

  /*-- Theme switcher messages --*/
  if (msg.type === "theme-switcher-to-dark") {
    switchToTheme("dark");
  }
  if (msg.type === "theme-switcher-to-light") {
    switchToTheme("light");
  }
};

// ==============================================================
// Figma Events
// https://www.figma.com/plugin-docs/api/properties/figma-on
// ==============================================================
figma.on("selectionchange", () => {
  console.log("selectionchange event was fired");

  figma.ui.postMessage({
    type: "selection-changed",
    message: figma.currentPage.selection,
  });
});
