figma.showUI(__html__, { width: 300, height: 448 });

const sendCurrentSelection = () => {
  // get the selected layers
  let selection = figma.currentPage.selection
  
  // If the layer has a "characters" property, include it
  // in the new `selection` array.
  selection = selection.filter(layer => !!layer?.characters).map(layer => {
    return({
      id: layer.id,
      name: layer.name,
      visible: layer.visible,
      x: layer.x,
      y: layer.y,
      characters: layer?.characters
    })
  })

  // send the selection array to the UI
  return figma.ui.postMessage({ type: "selection-change", message: selection });
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

    headerCell.variantProperties.Type = "Body";

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

      msg.columnConfiguration.map(async (col, i, arr) => {
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
          let textNodeOfHeaderCell = thisHeaderCell.children[0].children[0];

          thisHeaderCell.name = colName.length > 0 ? colName : "Header";

          textNodeOfHeaderCell.deleteCharacters(
            0,
            textNodeOfHeaderCell.characters.length
          );
          textNodeOfHeaderCell.insertCharacters(
            0,
            colName.length > 0 ? colName : "Header"
          );
          thisHeaderCell.setProperties({ Alignment: colAlignment });

          thisHeaderCell.resize(
            colMultiValue === "True" ? 120 : thisHeaderCell.width,
            thisHeaderCell.height
          );

          // thisHeaderCell.layoutGrow = 1;

          // if any cell is set to Multi-value then make all of them "fill container" vertically
          thisHeaderCell.children[0].layoutGrow = cellFillContainerY ? 1 : 0;
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
          cell.setProperties({ Type: "Body" });
          cell.children[0].children[0].setProperties({
            Type: colCellType,
            "Multi-value": colMultiValue,
          });

          // Because cells can be reset here as they're replaced with another
          // component (variants), we again set the fill container setting if
          // any of the columns is set to "multi value"
          cell.children[0].layoutGrow = cellFillContainerY ? 1 : 0;
          cell.primaryAxisSizingMode = cellFillContainerY ? "FIXED" : "AUTO";
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

  if (msg.type === 'get-sample-text') {
    const sampleText: object[] = figma.currentPage.selection
    figma.ui.postMessage({ type: "sample-text", message: sampleText });
  }

  figma.on("selectionchange", () => {
    sendCurrentSelection()
  })
};
