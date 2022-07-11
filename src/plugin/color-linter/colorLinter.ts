import uuid from "uuid-random";
import { rgbToHex } from "../../app/components/utils";
import rawLightColorTokens from "../../../data/light-mode.json";
import rawDarkColorTokens from "../../../data/dark-mode.json";
import { isVisibleNode } from "@figma-plugin/helpers";

// ==============================================================
// Color linter functions
// ==============================================================

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
export const getColorTokens = async (mapThemesToEachOther: Boolean) => {
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

  return colorTokens;
};

export const getColorStats = async (forThemeSwitcher: Boolean = false) => {
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
