import uuid from 'uuid-random';
import { isVisibleNode } from "@figma-plugin/helpers";
import oneCorePaintStyles from './oneCorePaintStyles.js';

figma.showUI(__html__, { width: 300, height: 448 });

// Used to send a custom event to New Relic
let customEventData = {
  fileName: figma.currentPage.parent.name,
  fileKey: figma.fileKey,
  // setting them in title case because that's how
  // I did it orginally and though I regret it,
  // I don't want to lose track of historical data
  "User Name": figma.currentUser.name,
  "User Avatar": figma.currentUser.photoUrl,
  "User ID": figma.currentUser.id,
  "Session ID": figma.currentUser.sessionId,
};

// handle submenu navigation
const navigateTo = (screen: string) => {
  figma.ui.postMessage({ type: "figma-command", message: {
      message: screen,
      ...customEventData
    } 
  });

  console.log(`navigateTo('${screen}') run`);
}

switch (figma.command) {
  case "open-home":
    navigateTo('open-home')
    break;
  case "open-table-creator":
    navigateTo('open-table-creator')
    break;
  case "open-language-linter":
    navigateTo('open-language-linter')
    figma.ui.resize(475, 500)
    break;
  case "open-color-linter":
    navigateTo('open-color-linter')
    figma.ui.resize(475, 500)
    break;
}

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
  tableFrame.counterAxisSizingMode = "AUTO";
  tableFrame.layoutMode = "VERTICAL";
  tableFrame.x = figma.viewport.center.x;
  tableFrame.y = figma.viewport.center.y;

  // headerCell.variantProperties.Type = "Body";

  // if any cell is set to Multi-value, set a variable we'll use later
  msg.columnConfiguration.find(
    (col) => (cellFillContainerY = col.multiValue)
  );

  [...Array(msg.rows + 1).keys()].map((rowIndex) => {
    tableRow.layoutMode = "HORIZONTAL";
    tableRow.counterAxisSizingMode = "AUTO";
    tableRow.name = "Row";
    // tableRow.layoutAlign = 'STRETCH'
    // tableRow.primaryAxisSizingMode = 'FIXED';

    msg.columnConfiguration.map(async (col) => {
      let {
        name: colName,
        alignment: colAlignment,
        cellType: colCellType,
        multiValue: colMultiValue,
      } = col;

      colAlignment =
        colAlignment[0].toUpperCase() + colAlignment.substring(1);
      colCellType = colCellType[0].toUpperCase() + colCellType.substring(1);
      colMultiValue = colMultiValue.toString();
      colMultiValue =
        colMultiValue[0].toUpperCase() + colMultiValue.substring(1);

      if (rowIndex === 0) {
        let thisHeaderCell = headerCell.createInstance();
        let textNodeOfHeaderCell = (thisHeaderCell.children[0] as InstanceNode).children[0];

        thisHeaderCell.name = colName.length > 0 ? colName : "Header";

        (textNodeOfHeaderCell as TextNode).deleteCharacters(
          0,
          (textNodeOfHeaderCell as TextNode).characters.length
        );
        (textNodeOfHeaderCell as TextNode).insertCharacters(
          0,
          colName.length > 0 ? colName : "Header"
        );
        
        thisHeaderCell.setProperties({ Alignment: colAlignment });

        thisHeaderCell.resize(
          colMultiValue === "True" ? 120 : thisHeaderCell.width,
          thisHeaderCell.height
        );


        // if any cell is set to Multi-value then make all of them "fill container" vertically
        (thisHeaderCell.children[0] as FrameNode).layoutGrow = cellFillContainerY ? 1 : 0;
        thisHeaderCell.primaryAxisSizingMode = cellFillContainerY
          ? "FIXED"
          : "AUTO";

        tableRow.appendChild(thisHeaderCell);
      }
    });

    if (rowIndex === 0) {
      tableFrame.appendChild(tableRow);
    } else {
      let thisTableRow = tableRow.createInstance();

      // thisTableRow.layoutAlign = 'STRETCH'
      // thisTableRow.primaryAxisSizingMode = 'FIXED';

      thisTableRow.children.map((cell, index) => {
        let { cellType: colCellType, multiValue: colMultiValue } =
          msg.columnConfiguration[index];

        colCellType = colCellType[0].toUpperCase() + colCellType.substring(1);
        colMultiValue = colMultiValue.toString();
        colMultiValue =
          colMultiValue[0].toUpperCase() + colMultiValue.substring(1);

        cell.name === "Header" ? (cell.name = "Cell") : null;
        (cell as InstanceNode).setProperties({ Type: "Body" });
        (((cell as InstanceNode).children[0] as FrameNode).children[0] as InstanceNode).setProperties({
          Type: colCellType,
          "Multi-value": colMultiValue,
        });

        // Because cells can be reset here as they're replaced with another
        // component (variants), we again set the fill container setting if
        // any of the columns is set to "multi value"
        ((cell as FrameNode).children[0] as FrameNode).layoutGrow = cellFillContainerY ? 1 : 0;
        (cell as FrameNode).primaryAxisSizingMode = cellFillContainerY ? "FIXED" : "AUTO";
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
}

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
  })
}

const sendCurrentTextSelection = () => {
  // get the selected layers
  let selection = figma.currentPage.selection

  // initialize an variable that we'll store our output in
  // as we loop over the selected layers
  let textLayers = []

  // for each selected layer
  selection.forEach((selectedLayer) => {
    // If the layer has children
    if (!!(selectedLayer as FrameNode)?.children) {
      // get all of the children of the layer that are text layers
      const selectedTextLayers = (selectedLayer as FrameNode).findAll(n => n.type === 'TEXT')
      
      // Add any children that are text layers to the output array
      selectedTextLayers.forEach((layer) => {
        pushTextLayerToArray(layer, textLayers)
      })
      
    } else if (selectedLayer.type === 'TEXT') {
      pushTextLayerToArray(selectedLayer, textLayers)
    }
  })

  // TODO!: 
  // - [ ] If there are multiple layers selected. Discard the layers without errors.
  // - [ ] If a layer is updated while it's open, check it for errors and add it 
  //       to the navigable layers if necessary

  // send the selection array to the UI
  return figma.ui.postMessage({ 
    type: "selection-change", 
    message: {
      textLayers, 
      selectedLayer: selection
    } 
  });
}

// ==============================================================
// Color linter function
// ==============================================================
const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
        c = Math.round(c * 255);
        let hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const combineComponents = (r, g, b) => {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    return combineComponents(r, g, b);
};

// Utility function for pushing a color into an array
// it's just saving me from repeating myself a bit
const pushColorToArray = (layer, colorType: string, array: any[]) => {
    const styleIdType = colorType === 'fills' ? 'fillStyleId' : 'strokeStyleId';
    const isSolidColor = layer?.fills[0]?.type === 'SOLID';
    const colorIsImage = colorType === 'fills' && layer?.fills[0]?.type === 'IMAGE';
    const colorIsGradient = colorType === 'fills' && layer?.fills[0]?.type.includes('GRADIENT')
    const colorIsVisible = layer[colorType][0].visible

    if (!colorIsImage && !colorIsGradient && colorIsVisible && !layer.isChildOfIconWithFill) {
        const colorInHex = (colorInRGB) => {
            return rgbToHex(colorInRGB.r, colorInRGB.g, colorInRGB.b);
        };

        array.push({
            colorId: uuid(), // generat a Unique ID to keep track of colors,
            layerId: layer.layerId,
            layerName: layer.name,
            layerType: layer.type,
            color: layer[colorType],
            colorStyleId: layer[styleIdType],
            // if it's a gradient assume it doesn't have a color style
            // Unsafe assumption? Yes. Time saver? Yes.
            hasColorStyle: isSolidColor ? layer[styleIdType].length > 0 : false,
            visible: layer.visible,
            colorType: colorType.slice(0, -1), // it's plural, make it singular
            colorInHex: colorInHex(layer[colorType][0].color),
        });
    }
};

const getColorStats = () => {
    const getRawLayersWithColor = () => {
      // get the selected layers
      let selection = figma.currentPage.selection;

      const relevantLayers: SceneNode[][] = selection.map((selectedLayer) => {
          // Get all styles in selection that have a color
          // (the output will have a lot of data stored in prototype properites)
          
          let outputForLayersWithChildren: SceneNode[] = []

          const isRelevantLayer = (n) => {
            const acceptableNodetypes = [
                  'ELLIPSE',
                  'FRAME',
                  'GROUP',
                  'COMPONENT',
                  'INSTANCE', // GUILTY!!
                  'LINE', // GUILTY!!
                  'POLYGON',
                  'RECTANGLE', // GUILTY!!
                  'SHAPE_WITH_TEXT',
                  'STAR',
                  'TEXT',
                  'BOOLEAN_OPERATION'
                  // 'VECTOR'
              ];
              
              let hasFill = "fills" in n && n?.fills[0] !== undefined
              let hasStroke = "strokes" in n && n?.strokes[0] !== undefined
              
              const hasFillOrStroke = hasFill || hasStroke
              const nodeIsValidNodeType = acceptableNodetypes.some((nodeType) => n.type === nodeType);

              return nodeIsValidNodeType && hasFillOrStroke
          }

          // return the layer if it fit's the criteria of isRelevantLayer()
          console.log(`'findAll' in selectedLayer ===`, 'findAll' in selectedLayer);
          const selectedLayerHasChildren = 
            'findAll' in selectedLayer && 
            selectedLayer?.children?.length > 0
            
          if (selectedLayerHasChildren) {
            // if it has children
            outputForLayersWithChildren = selectedLayer.findAll((n) => isRelevantLayer(n));
            console.log(selectedLayer);
            return [...outputForLayersWithChildren];
          } else if (isRelevantLayer(selectedLayer)) {
            // if it's a single layer
            return [selectedLayer]
          } else {
            return []
          }
      });


      let output = relevantLayers.flat()
      output = output.filter(layer => isVisibleNode(layer))

      return output
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
      const hasFill = "fills" in layer && layer.fills[0] !== undefined
      const hasStroke = "strokes" in layer && layer.strokes[0] !== undefined
      const hasFillAndStroke = hasFill && hasStroke;
      const isChildOfIcon = layer.parent.type === 'BOOLEAN_OPERATION'
      const parentIconHasFill = layer.parent?.fills?.length > 0
      const isChildOfIconWithFill = isChildOfIcon && parentIconHasFill

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
          isChildOfIconWithFill: isChildOfIconWithFill
      };
  });

  const allInstancesOfColor = layersWithColor
      .map((layer) => {
          let tempColors = [];

          // get all each fill and stroke that isn't empty and add it
          // as an item in a new flat array containing all color instances
          if (layer.hasFillAndStroke) {
              pushColorToArray(layer, 'fills', tempColors);
              pushColorToArray(layer, 'strokes', tempColors);
          } else if (layer.hasFill) {
              pushColorToArray(layer, 'fills', tempColors);
          } else if (layer.hasStroke) {
              pushColorToArray(layer, 'strokes', tempColors);
          }

          return tempColors;
      })
      .flat();

  // Checklist for verifying that a layers uses a One Core color style
  // 1. If it's a fill, it's `fillStyleId` isn't an empty string (likewise if it's a stroke but for `strokeStyleId`)
  // 2. The key extracted from it's (fill/stroke)styleId matches a key from the `oneCorePaintStyles` array

  // This will give you the total number of colors that use a color style
  // const amountOfColorsUsingColorStyle = allInstancesOfColor.reduce((prev, color, index) => {
  //   return color.hasColorStyle ? prev + 1 : prev
  // }, 0)

  const doesColorMatchAnyOneCoreStyle = (colorInHex) => {
      // for every One Core color style...

      return oneCorePaintStyles.some((style) => {
          // if the argument color matches the current style color
          // return true
          return colorInHex === style.color.color.hex;
      }, false);
  };

  const doesKeyMatchAnyOneCoreColorStyleKey = (key) => {
      // for every One Core color style...
      return oneCorePaintStyles.some((style) => {
          // if the argument color matches the current style color
          // return true
          return key.includes(style.key);
      }, false);
  };

  // for each color that has a color style
  const colorsWithColorStyle = allInstancesOfColor.filter((color) => {
      return color.hasColorStyle;
  });

  // If it's color matches a One Core color add it an array
  const colorsUsingOneCoreStyle = (() => {
      let colors = colorsWithColorStyle.filter((color) => {
          const {r, g, b} = color.color[0].color;
          const colorInHex = rgbToHex(r, g, b);

          return doesColorMatchAnyOneCoreStyle(colorInHex) && doesKeyMatchAnyOneCoreColorStyleKey(color.colorStyleId);
      });

      // add the style name to the colors
      colors.map((color, index) => {
          oneCorePaintStyles.map((style) => {
              if (color.colorStyleId.includes(style.key)) {
                  colors[index] = {
                      ...color,
                      styleName: style.name,
                  };
              }
              return;
          });
      });

      return colors;
  })();


  // Every color that isn't using a one core color style
  // loop through all colors...
  const colorsNotUsingOneCoreColorStyle = allInstancesOfColor.filter((color) => {
      return !oneCorePaintStyles.some((oneCoreColor) => {
          return color.colorStyleId.includes(oneCoreColor.key)
      });
  });

  const oneCoreColorStyleCoverage = `${((colorsUsingOneCoreStyle.length / allInstancesOfColor.length) * 100).toFixed(
      2
  )}%`;

  const idsOfAllInstancesOfColor = allInstancesOfColor.map((color) => color.colorId);

  const colorStats = {
      allInstancesOfColor: allInstancesOfColor,
      colorsWithColorStyle: colorsWithColorStyle,
      colorsUsingOneCoreStyle: colorsUsingOneCoreStyle,
      colorsNotUsingOneCoreColorStyle: colorsNotUsingOneCoreColorStyle,
      oneCoreColorStyleCoverage: oneCoreColorStyleCoverage,
      idsOfAllInstancesOfColor: idsOfAllInstancesOfColor,
  };

  return colorStats
}

const selectAndZoomToLayer = (layerId: string) => {
    const layer: SceneNode = (figma.getNodeById(layerId) as SceneNode);

    figma.currentPage.selection = [layer];
    figma.viewport.scrollAndZoomIntoView([layer]);
};

// ==============================================================
// Receiving messages sent from the UI
// ==============================================================

figma.ui.onmessage = async (msg) => {
  /*-- Handle tab navigation messages --*/
  if (msg.type === "navigate-to-tab") {
    switch (msg.tabClicked) {
      case "home":
        figma.ui.resize(300, 448)
        navigateTo('open-home')
        break;
      case "table-creator":
        figma.ui.resize(300, 448)
        navigateTo('open-table-creator')
        break;
      case "language-linter":
        sendCurrentTextSelection()
        figma.ui.resize(475, 500)
        navigateTo('open-language-linter')
        break;
      case "color-linter":
        figma.ui.resize(475, 500)
        navigateTo('open-color-linter')
        break;
    }
  }

  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  }
        
  /*-- Table creator messages --*/
  if (msg.type === "create-table") {
    createTable(msg);
  }

  /*-- Language linter messages --*/
  if (msg.type === 'request-selection') {
    sendCurrentTextSelection();

    if (msg.message === 'colors') {
      figma.ui.postMessage({
          type: 'color-stats',
          message: {
            ...customEventData,
            colorStats: getColorStats(),
            selectionMade: figma.currentPage.selection.length > 0
          },
      });
    }
  }

  if (msg.type === 'request-local-custom-dictionary') {
    figma.clientStorage.getAsync("languageLinterCustomDictionary").then(result => {
      figma.ui.postMessage({ 
        type: "local-custom-dictionary-retrieved", 
        message: result ? result : [] 
      });
    })
  }

  if (msg.type === 'add-to-dictionary') {
    figma.clientStorage.getAsync("languageLinterCustomDictionary").then(result => {
      let newCustomDictionary = result ? result : []

      newCustomDictionary.push(msg.wordToAdd)

      figma.clientStorage.setAsync("languageLinterCustomDictionary", newCustomDictionary)
    })
  }

  if (msg.type === 'get-sample-text') {
    const sampleText = figma.currentPage.selection
    figma.ui.postMessage({ type: "sample-text", message: sampleText });
  }

  // scroll and zoom the active layer into the center of the screen
  if (msg.type === 'sample-text-changed') {
    const activeTextLayer = figma.getNodeById(msg.activeNodeId)
    figma.viewport.scrollAndZoomIntoView([activeTextLayer])
  }

  if (msg.type === 'update-source-text') {
    const activeTextLayer = figma.getNodeById(msg.layerId) as TextNode
    let fontName = activeTextLayer.fontName

    if (fontName === figma.mixed) {
      // process each character individually 
      // or simply get the color of the first character
      await Promise.all(activeTextLayer.getRangeAllFontNames(0, activeTextLayer.characters.length).map(figma.loadFontAsync))
    } else {
      await figma.loadFontAsync(fontName);
    }

    activeTextLayer.deleteCharacters(0, activeTextLayer.characters.length)
    activeTextLayer.insertCharacters(0, msg.updatedText)

    figma.ui.postMessage({ type: "source-text-updated", message: msg.updatedText });
  }

  if (msg.type === 'text-linted') {
    figma.ui.postMessage({ type: "text-linted", message: {
      customEventData,
      minimalReport: msg.minimalReport,
      fullReport: msg.fullReport
    } });
  }

  /*-- Color linter messages --*/
  if (msg.type === 'select-layer') {
    selectAndZoomToLayer(msg.layerId);
  }
};

figma.on("selectionchange", () => {
  console.log('selectionchange was fired');
  sendCurrentTextSelection()
})
