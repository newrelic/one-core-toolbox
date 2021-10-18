import * as React from 'react';
import { useState,  useEffect } from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const ColumnConfiguration = ({ createTable, goToDimensionsSelection, activeCol, columnConfiguration, setColumnConfiguration }) => {
    const [activeColConfigurationScreen, setActiveColConfigurationScreen] = useState(0);
    // const [localColumnConfiguration, setLocalColumnConfiguration] = useState(column)

    // const handleActiveColScreenChange = () => {
    //     debugger
    // }
    
    const handleColumnConfigurationUpdate = (attr) => {
        let columnConfigurationArray = [...columnConfiguration];

        columnConfigurationArray[activeColConfigurationScreen][attr] = attr !== 'multiValue' ? event.target.value : event.target.checked

        setColumnConfiguration(columnConfigurationArray)
    }

    const handleNavButtonClick = (direction) => {
        if (direction === 'previous' && activeColConfigurationScreen !== 0) {
            setActiveColConfigurationScreen(activeColConfigurationScreen - 1 )
        } else if (direction === 'next' && activeColConfigurationScreen !== columnConfiguration.length - 1) {
            setActiveColConfigurationScreen(activeColConfigurationScreen + 1 )
        }
    }

    const renderColumnNavigation = () => {
        return (
            <nav className="column-nav">
                <button 
                    className={"nav-arrow left-nav-arrow"} 
                    onClick={() => handleNavButtonClick('previous')}
                    disabled={activeColConfigurationScreen === 0}
                ></button>
                
                <div className="select-input-container">
                    <select 
                        name="column-selection" 
                        className="column-selection-dropdown" 
                        onChange={() => setActiveColConfigurationScreen(parseInt(event.target.value) - 1)}
                        value={activeColConfigurationScreen + 1}
                    >
                        {
                            [...Array(activeCol).keys()].map((index) => {
                                return (<option key={index} value={index + 1} className="column-selection-dropdown-option">{`Column ${index + 1}`}</option>)
                            })
                        }
                    </select>
                </div>
    
                <button 
                    className={"nav-arrow right-nav-arrow"}
                    onClick={() => handleNavButtonClick('next')}
                    disabled={activeColConfigurationScreen === columnConfiguration.length - 1}
                ></button>
            </nav>
        )
    }
    
    const renderConfigurationBody = () => {
        const multiValueDisabled = () => {
            const currentCellType = columnConfiguration[activeColConfigurationScreen]['cellType']
            console.log(currentCellType);
            if (
                currentCellType === 'Text' ||
                currentCellType === 'text' || 
                currentCellType === 'metric' || 
                currentCellType === 'entity'
            ) {
               return false 
            } else {
                return true
            }

        }

        
        return (
            <section className="configuration-body">
                <div className="configuration-body-headings">
                    <h4>Cell formatting</h4>
                    <h6>Choose the properties for the cells in this column</h6>
                </div>
                
                <div className="input-container">
                    <label htmlFor="column-name">Column name</label>
                    <input 
                        type="text" 
                        name="column-name"
                        className="column-configuration-name-input"
                        placeholder="e.g. date, account, throughput, etc. "
                        id="column-name"
                        onChange={() => handleColumnConfigurationUpdate('name')}
                        value={columnConfiguration[activeColConfigurationScreen]['name']}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="column-alignment">Alignment</label>
                    <div className="select-input-container">
                        <select 
                            name="alignment-selection" 
                            className="column-configuration-alignment-input" 
                            id="column-alignment" 
                            onChange={() => handleColumnConfigurationUpdate('alignment')}
                            value={columnConfiguration[activeColConfigurationScreen]['alignment']}
                        >
                            <option value="left" className="column-configuration-alignment-input-option">Left</option>
                            <option value="right" className="column-configuration-alignment-input-option">Right</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="column-cell-type">Cell type</label>
                    <div className="select-input-container">
                        <select 
                            name="alignment-selection" 
                            className="column-configuration-alignment-input" 
                            id="column-cell-type" 
                            onChange={() => handleColumnConfigurationUpdate('cellType')}
                            value={columnConfiguration[activeColConfigurationScreen]['cellType']}
                        >
                            <option value="text" className="column-configuration-alignment-input-option">Text</option>
                            <option value="link" className="column-configuration-alignment-input-option">Link</option>
                            <option value="metric" className="column-configuration-alignment-input-option">Metric</option>
                            <option value="entity" className="column-configuration-alignment-input-option">Entity</option>
                            <option value="favorite" className="column-configuration-alignment-input-option">Favorite</option>
                            <option value="user" className="column-configuration-alignment-input-option">User</option>
                            <option value="checkbox" className="column-configuration-alignment-input-option">Checkbox</option>
                            <option value="actions" className="column-configuration-alignment-input-option">Actions</option>
                        </select>
                    </div>
                </div>
                <label className="input-container" htmlFor="column-multi-value">
                    <h5 className="label">Multi-value</h5>
                    <div className={`switch ${multiValueDisabled() ? 'disabled' : ''}`}>
                        <input 
                            type="checkbox" 
                            id="column-multi-value"  
                            onChange={() => handleColumnConfigurationUpdate('multiValue')}
                            checked={!multiValueDisabled() ? columnConfiguration[activeColConfigurationScreen]['multiValue'] : false}
                            disabled={multiValueDisabled()}
                        />
                        <span className="slider round"></span>
                    </div>
                </label>
            </section>
        )
    }

    const renderCallsToAction = () => {
        return (
            <div className="cta-container">
                <button className="btn" onClick={goToDimensionsSelection}>Set table dimensions</button>
                <button className="btn btn-primary btn-create-table" onClick={createTable}>Create table</button>
            </div>
        )
    }
    
    return (
        <> 
            {renderColumnNavigation()}

            <main className="column-configuration-body">
                {renderConfigurationBody()}
                {renderCallsToAction()}
            </main>
        </>
    )
};

export default ColumnConfiguration;
