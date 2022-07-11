import { toCapitalizedString } from "../../app/components/utils";

// ==============================================================
// Table creator functions
// ==============================================================
export const createTable = async (msg, customEventData) => {
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

  const hideSortControls = (headerCell) => {
    const arrowsLayer = headerCell.findOne((child) => child.name === "Arrows");

    arrowsLayer.visible = false;
  };

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
        sortControls: colSortControls,
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
        const shouldHaveHeaderText =
          colCellType !== "Favorite" && colCellType !== "Actions";
        const cellTypeIsActions = colCellType === "Actions";
        const hasCustomColName = colName.length;

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

        // If it should have header text, don't show header text or arrows
        if (!shouldHaveHeaderText) {
          hideSortControls(thisHeaderCell);
          setHeaderTextCharacters(" ");
        }

        thisHeaderCell.setProperties({ Alignment: colAlignment });

        const determineHeaderCellWidth = () => {
          if (msg.isMultiValue) return 120;
          if (colCellType === "Entity") return 102;
          if (colCellType === "User") return 120;
          if (!shouldHaveHeaderText) return 50;
          if (shouldHaveHeaderText && colSortControls) return 90;

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
        thisHeaderCell.counterAxisSizingMode = !shouldHaveHeaderText
          ? "AUTO"
          : "FIXED";
        thisHeaderCell.counterAxisSizingMode = cellTypeIsActions
          ? "FIXED"
          : thisHeaderCell.counterAxisSizingMode;

        if (shouldHaveHeaderText && !colSortControls) {
          thisHeaderCell.counterAxisSizingMode = "AUTO";
        }

        tableRow.appendChild(thisHeaderCell);

        // Handle sort controls
        const handleSortControls = () => {
          if (colCellType === "Actions") hideSortControls(thisHeaderCell);
          if (!colSortControls) hideSortControls(thisHeaderCell);
        };

        handleSortControls();
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
