// import { isVisibleNode } from "@figma-plugin/helpers";

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

export const sendCurrentTextSelection = () => {
  // get the selected layers
  let selection = figma.currentPage.selection;

  // initialize an variable that we'll store our output in
  // as we loop over the selected layers
  let textLayers = [];
  let selectionExlusivelyTextLayers = true;

  selection.forEach((layer) => {
    if (layer.type !== "TEXT") {
      selectionExlusivelyTextLayers = false;
      return;
    } else {
      pushTextLayerToArray(layer, textLayers);
    }
  });

  if (!selectionExlusivelyTextLayers) {
    figma.notify(
      "⚠️ Text layers only: Please limit your selection to text layers",
      { error: true }
    );

    textLayers = [];
  }

  /*
   This snippet allows for the selection of any layer type.
   It deep-checks the children of the selected layers and
   extracts the text layers only.

   It's commented out because I decided to only allow the
   selection of text layers to limit the load placed on 
   an already slow feature.
  */
  // // for each selected layer
  // selection.forEach((selectedLayer) => {
  //   // If the layer has children
  //   if (!!(selectedLayer as FrameNode)?.children) {
  //     // get all of the children of the layer that are text layers
  //     const selectedTextLayers = (selectedLayer as FrameNode).findAll(
  //       (n) => n.type === "TEXT"
  //     );

  //     // Add any children that are text layers to the output array
  //     selectedTextLayers.forEach((layer) => {
  //       isVisibleNode(layer) && pushTextLayerToArray(layer, textLayers);
  //     });
  //   } else if (selectedLayer.type === "TEXT") {
  //     isVisibleNode(selectedLayer) &&
  //       pushTextLayerToArray(selectedLayer, textLayers);
  //   }
  // });

  // send the selection array to the UI
  return figma.ui.postMessage({
    type: "new-text-selection",
    message: {
      textLayers,
      selectedLayers: selection,
    },
  });
};
