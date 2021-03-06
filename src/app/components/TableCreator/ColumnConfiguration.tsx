import * as React from "react";
import { useState } from "react";
import "../../styles/ui.css";

declare function require(path: string): any;

const ColumnConfiguration = ({
  createTable,
  activeCol,
  isMultiValue,
  columnConfiguration,
  setColumnConfiguration,
}) => {
  const [activeColConfigurationScreen, setActiveColConfigurationScreen] =
    useState(0);

  const handleColumnConfigurationUpdate = (attr) => {
    let columnConfigurationArray = [...columnConfiguration];
    const element = event.target as HTMLInputElement;

    columnConfigurationArray[activeColConfigurationScreen][attr] =
      attr !== "multiValue" ? element.value : element.checked;

    columnConfigurationArray[activeColConfigurationScreen][attr] =
      attr !== "sortControls" ? element.value : element.checked;

    if (
      columnConfigurationArray[activeColConfigurationScreen][attr] === "metric"
    ) {
      columnConfigurationArray[activeColConfigurationScreen]["alignment"] =
        "right";
    }

    setColumnConfiguration(columnConfigurationArray);
  };

  const handleNavButtonClick = (direction) => {
    if (direction === "previous" && activeColConfigurationScreen !== 0) {
      setActiveColConfigurationScreen(activeColConfigurationScreen - 1);
    } else if (
      direction === "next" &&
      activeColConfigurationScreen !== columnConfiguration.length - 1
    ) {
      setActiveColConfigurationScreen(activeColConfigurationScreen + 1);
    }
  };

  const renderColumnNavigation = () => {
    const handleColumnOptionSelection = (e) => {
      const selectedOption = e.target.options[e.target.options.selectedIndex];

      setActiveColConfigurationScreen(parseInt(selectedOption.value) - 1);
    };

    return (
      <nav className="column-nav">
        <button
          className={"nav-arrow left-nav-arrow"}
          onClick={() => handleNavButtonClick("previous")}
          disabled={activeColConfigurationScreen === 0}
        ></button>

        <div className="select-input-container">
          <select
            name="column-selection"
            className="column-selection-dropdown"
            onChange={(e) => handleColumnOptionSelection(e)}
            value={activeColConfigurationScreen + 1}
          >
            {[...Array(activeCol).keys()].map((index) => {
              return (
                <option
                  key={index}
                  value={index + 1}
                  className="column-selection-dropdown-option"
                >
                  {`Column ${index + 1}`}
                </option>
              );
            })}
          </select>
        </div>

        <button
          className={"nav-arrow right-nav-arrow"}
          onClick={() => handleNavButtonClick("next")}
          disabled={
            activeColConfigurationScreen === columnConfiguration.length - 1
          }
        ></button>
      </nav>
    );
  };

  const renderConfigurationBody = () => {
    const multiValueDisabled = () => {
      const currentCellType =
        columnConfiguration[activeColConfigurationScreen]["cellType"];
      if (
        currentCellType === "Text" ||
        currentCellType === "link" ||
        currentCellType === "metric" ||
        currentCellType === "entity"
      ) {
        return false;
      } else {
        return true;
      }
    };

    const cellTypeIsMetric = (() => {
      return (
        columnConfiguration[activeColConfigurationScreen]["cellType"] ===
        "metric"
      );
    })();

    const cellTypeIsFavorite = (() => {
      return (
        columnConfiguration[activeColConfigurationScreen]["cellType"] ===
        "favorite"
      );
    })();

    const cellTypeIsAction = (() => {
      return (
        columnConfiguration[activeColConfigurationScreen]["cellType"] ===
        "actions"
      );
    })();

    const colShouldHaveHeaderText = (() => {
      if (cellTypeIsAction || cellTypeIsFavorite) return false;

      return true;
    })();

    return (
      <section className="configuration-body">
        {renderColumnNavigation()}

        <div className="configuration-body-headings">
          <h4>Cell formatting</h4>
          <h6>Choose the properties for the cells in this column</h6>
        </div>

        <div
          className={`input-container ${
            colShouldHaveHeaderText ? "" : "disabled"
          }`}
        >
          <label htmlFor="column-name">Column name</label>
          <input
            type="text"
            name="column-name"
            className="column-configuration-input column-configuration-name-input"
            placeholder="e.g. date, account, throughput, etc. "
            id="column-name"
            onChange={() => handleColumnConfigurationUpdate("name")}
            value={columnConfiguration[activeColConfigurationScreen]["name"]}
            disabled={!colShouldHaveHeaderText}
          />
        </div>
        <div className="input-container">
          <label htmlFor="column-cell-type">Cell type</label>
          <div className="select-input-container">
            <select
              name="alignment-selection"
              className="column-configuration-input column-configuration-cell-type-input"
              id="column-cell-type"
              onChange={() => handleColumnConfigurationUpdate("cellType")}
              value={
                columnConfiguration[activeColConfigurationScreen]["cellType"]
              }
            >
              <option
                value="text"
                className="column-configuration-cell-type-input-option"
              >
                Text
              </option>
              <option
                value="link"
                className="column-configuration-cell-type-input-option"
              >
                Link
              </option>
              <option
                value="metric"
                className="column-configuration-cell-type-input-option"
              >
                Metric
              </option>
              <option
                value="entity"
                className="column-configuration-cell-type-input-option"
              >
                Entity
              </option>

              {activeColConfigurationScreen === 0 && (
                <option
                  value="favorite"
                  className="column-configuration-cell-type-input-option"
                >
                  Favorite
                </option>
              )}
              <option
                value="user"
                className="column-configuration-cell-type-input-option"
              >
                User
              </option>
              <option
                value="checkbox"
                className="column-configuration-cell-type-input-option"
              >
                Checkbox
              </option>
              <option
                value="actions"
                className="column-configuration-cell-type-input-option"
              >
                Actions
              </option>
            </select>
          </div>
        </div>
        <div
          className={`input-container ${
            cellTypeIsMetric || !colShouldHaveHeaderText ? "disabled" : ""
          }`}
        >
          <label htmlFor="column-alignment">Alignment</label>
          <div className="select-input-container">
            <select
              name="alignment-selection"
              className="column-configuration-input column-configuration-alignment-input"
              id="column-alignment"
              onChange={() => handleColumnConfigurationUpdate("alignment")}
              value={
                columnConfiguration[activeColConfigurationScreen]["alignment"]
              }
              disabled={cellTypeIsMetric || !colShouldHaveHeaderText}
            >
              <option
                value="left"
                className="column-configuration-alignment-input-option"
              >
                Left
              </option>
              <option
                value="right"
                className="column-configuration-alignment-input-option"
              >
                Right
              </option>
            </select>
          </div>
        </div>
        {isMultiValue && (
          <div
            className={`input-container ${
              multiValueDisabled() || !colShouldHaveHeaderText ? "disabled" : ""
            }`}
          >
            <label htmlFor="column-multi-value">Show multi-value</label>
            <input
              type="checkbox"
              id="column-multi-value"
              onChange={() => handleColumnConfigurationUpdate("multiValue")}
              checked={
                !multiValueDisabled()
                  ? columnConfiguration[activeColConfigurationScreen][
                      "multiValue"
                    ]
                  : false
              }
              disabled={multiValueDisabled() || !colShouldHaveHeaderText}
            />
          </div>
        )}
        <div
          className={`input-container ${
            multiValueDisabled() || !colShouldHaveHeaderText ? "disabled" : ""
          }`}
        >
          <label htmlFor="column-sort-controls">Show sort controls</label>
          <input
            type="checkbox"
            id="column-sort-controls"
            onChange={() => handleColumnConfigurationUpdate("sortControls")}
            checked={
              !multiValueDisabled()
                ? columnConfiguration[activeColConfigurationScreen][
                    "sortControls"
                  ]
                : false
            }
            disabled={multiValueDisabled() || !colShouldHaveHeaderText}
          />
        </div>
      </section>
    );
  };

  const renderCallsToAction = () => {
    return (
      <div className="cta-container">
        <button
          className="btn btn-primary btn-create-table"
          onClick={createTable}
        >
          Create table
        </button>
      </div>
    );
  };

  return (
    <>
      <main className="column-configuration-body">
        {renderConfigurationBody()}
        {renderCallsToAction()}
      </main>
    </>
  );
};

export default ColumnConfiguration;
