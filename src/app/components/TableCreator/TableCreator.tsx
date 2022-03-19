import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/ui.css";
import ColumnConfiguration from "./ColumnConfiguration";
import DimensionsSelection from "./DimensionsSelection";
import IconChevronLeft from "../../assets/icon-chevron-left.svg";

declare function require(path: string): any;

const TableCreator = (props) => {
  const { setActivePlugin } = props;

  const [activeTab] = useState("table-creator");
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
    const element = event.target as HTMLInputElement;
    let { value, min, max } = element;
    const calculatedValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value))
    );

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

  // Render the nav tabs in the plug UI
  const renderNavigationTabs = () => {
    const tabs: string[] = ["table-creator"];

    // for each tab in the above array
    return tabs.map((tab, index) => {
      let tabClasses: string[] = ["tab-navigation-tab"];
      let tabClassesOutput = tabClasses.join(" ");
      // create the label from the value of `tab`
      let tabLabel =
        tab.charAt(0).toUpperCase() + tab.split("-").join(" ").substring(1);

      // If it's the active tab, apply the class "active" to it
      if (activeTab === tab) {
        tabClasses.push("active");
        tabClassesOutput = tabClasses.join(" ");
      }

      return (
        <li
          className={tabClassesOutput}
          // onClick={() => handleNavigationTabClick(tab)}
          key={index}
        >
          {tabLabel}
        </li>
      );
    });
  };

  return (
    <>
      <ul className="tab-navigation">
        <li
          className="tab-navigation-tab back-tab"
          onClick={() => setActivePlugin("home")}
        >
          <img src={IconChevronLeft} alt="back button" />
        </li>
        {renderNavigationTabs()}
      </ul>
      {renderTableCreator()}
    </>
  );
};

export default TableCreator;
