import * as React from "react";
import { useState, useEffect } from "react";
import "../styles/ui.css";
import ColumnConfiguration from "./ColumnConfiguration";
import DimensionsSelection from "./DimensionsSelection";

declare function require(path: string): any;

const TableCreator = () => {
  const [activeScreen, setActiveScreen] = useState("DimensionsSelection");
  const [activeCol, setActiveCol] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const [columnConfiguration, setColumnConfiguration] = useState([]);

  const handleColumnConfiguration = () => {
    let columnConfigurationArray = [];

    if (columnConfiguration.length === 0) {
      [...Array(activeCol).keys()].map(() => {
        columnConfigurationArray.push({
          name: "",
          alignment: "Left",
          cellType: "Text",
          multiValue: false,
        });
      });
    } else if (columnConfiguration.length > 0) {
      columnConfigurationArray = columnConfiguration;

      if (columnConfigurationArray.length > activeCol) {
        const columnsToRemove = columnConfigurationArray.length - activeCol;
        [...Array(columnsToRemove).keys()].map(() => {
          columnConfigurationArray.pop();
        });
      } else {
        const columnsToAdd = activeCol - columnConfigurationArray.length;
        [...Array(columnsToAdd).keys()].map(() => {
          columnConfigurationArray.push({
            name: "",
            alignment: "Left",
            cellType: "Text",
            multiValue: false,
          });
        });
      }
    }

    setColumnConfiguration(columnConfigurationArray);
  };

  useEffect(handleColumnConfiguration, [activeCol]);

  const handeGridSelectionInputs = (type) => {
    const element = event.target as HTMLInputElement
    let { value, min, max } = element;
    const calculatedValue = Math.max(Number(min), Math.min(Number(max), Number(value)));

    if (type === "col") {
      setActiveCol(calculatedValue);
    } else if (type === "row") {
      setActiveRow(calculatedValue);
    }
  };

  const handleGridSquareClick = (colIndex, rowIndex) => {
    setActiveCol(colIndex + 1);
    setActiveRow(rowIndex + 1);
  };

  const createTable = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-table",
          cols: activeCol,
          rows: activeRow,
          columnConfiguration: columnConfiguration,
        },
      },
      "*"
    );

    parent.postMessage({ pluginMessage: { type: "creation-feedback" } }, "*");
  };

  const goToColumnConfiguration = () => {
    setActiveScreen("ColumnConfiguration");
  };

  const goToDimensionsSelection = () => {
    setActiveScreen("DimensionsSelection");
  };

  const renderTableCreator = () => {
    if (activeScreen === "DimensionsSelection") {
      return (
        <DimensionsSelection
          handleGridSquareClick={handleGridSquareClick}
          activeCol={activeCol}
          activeRow={activeRow}
          handeGridSelectionInputs={handeGridSelectionInputs}
          goToColumnConfiguration={goToColumnConfiguration}
        />
      );
    } else if (activeScreen === "ColumnConfiguration") {
      return (
        <ColumnConfiguration
          createTable={createTable}
          goToDimensionsSelection={goToDimensionsSelection}
          activeCol={activeCol}
          columnConfiguration={columnConfiguration}
          setColumnConfiguration={setColumnConfiguration}
        />
      );
    }
  };

  // Send user data to monitoring tool
  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === "table-created") {
        // newrelic is included at the top of ui.html in a
        // a script tag. Typescript will complain. So...
        // @ts-ignore
        newrelic.addPageAction("tableCreated", {
          "User ID": message.userData.id,
          "User Name": message.userData.name,
          "User Avatar": message.userData.photoUrl,
          "Session ID": message.userData.sessionId,
          "Column count": message.columnCount,
          "Row count": message.rowCount,
          "Column Configuration": message.columnConfiguration,
        });
      }
    };
  }, []);

  return renderTableCreator();
};

export default TableCreator;
