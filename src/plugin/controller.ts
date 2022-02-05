figma.showUI(__html__, { width: 300, height: 448 });

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

const sendCurrentSelection = () => {
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
  return figma.ui.postMessage({ type: "selection-change", message: textLayers });
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === "navigate-to-tab") {
    switch (msg.tabClicked) {
      case "table-creator":
        figma.ui.resize(300, 448)
        break;
      case "language-linter":
        sendCurrentSelection()
        figma.ui.resize(475, 500)
        break;
    }
  }

  if (msg.type === "create-table") {
    const tableFrame = figma.createFrame();
    let headerCell = await figma.importComponentByKeyAsync(
      "ce8fa8e8cab07a19f83f4181ac8cbe76093c6bc3"
    );
    let tableRow = figma.createComponent();
    let cellFillContainerY = false;

    await figma.loadFontAsync({ family: "Open Sans", style: "Regular" });

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
      userData: figma.currentUser, 
      columnConfiguration: msg.columnConfiguration,
      columnCount: msg.columnConfiguration.length,
      rowCount: msg.rows
    };

    figma.ui.postMessage({ type: "table-created", message: tableData });

    figma.notify("Table created ✅");

    figma.closePlugin();
  }

  if (msg.type === 'request-selection') {
    sendCurrentSelection();
  }

  if (msg.type === 'get-sample-text') {
    const sampleText = figma.currentPage.selection
    figma.ui.postMessage({ type: "sample-text", message: sampleText });
  }

  if (msg.type === 'sample-text-changed') {
    // scroll and zoom the active layer into the center of the screen
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

  figma.on("selectionchange", () => {
    sendCurrentSelection()
  })
};

// handle submenu navigation
switch (figma.command) {
  case "table":
    figma.ui.postMessage({ type: "figma-command", message: "open-table-creator" });
    break;
  case "language":
    figma.ui.postMessage({ type: "figma-command", message: "open-language-linter" });
    figma.ui.resize(475, 500)
    break;
}
