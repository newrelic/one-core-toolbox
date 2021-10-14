import * as React from 'react';
import { useState } from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const ColumnConfiguration = ({ createTable, goToDimensionsSelection, activeCol, setColumnConfiguration }) => {
    const [activeColConfigurationScreen, setActiveColConfigurationScreen] = useState(0);

    const renderColumnNavigation = () => {
        return (
            <nav className="column-nav">
                <button className={"nav-arrow left-nav-arrow"}></button>
                
                <div className="select-input-container">
                    <select name="column-selection" className="column-selection-dropdown">
                        {
                            [...Array(activeCol).keys()].map((index) => {
                                return (<option value={`Column ${index + 1}`} selected={index === (activeColConfigurationScreen - 1)} className="column-selection-dropdown-option">{`Column ${index + 1}`}</option>)
                            })
                        }
                    </select>
                </div>
    
                <button className={"nav-arrow right-nav-arrow"}></button>
            </nav>
        )
    }
    
    const renderConfigurationBody = () => {
        return (
            <section className="configuration-body">
                <h4>Columns configuration</h4>
                
                <div className="input-container">
                    <label htmlFor="column-name">Name</label>
                    <input 
                        type="text" 
                        name="column-name" 
                        className="column-configuration-name-input"
                        placeholder="Title your column"
                        id="column-name"
                        // onChange={() => handeGridSelectionInputs('col')}
                        value="" 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="column-alignment">Alignment</label>
                    <div className="select-input-container">
                        <select name="alignment-selection" className="column-configuration-alignment-input" id="column-alignment">
                            <option value="left" className="column-configuration-alignment-input-option">Left</option>
                            <option value="right" className="column-configuration-alignment-input-option">Right</option>
                        </select>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="column-cell-type">Cell type</label>
                    <div className="select-input-container">
                        <select name="alignment-selection" className="column-configuration-alignment-input" id="column-cell-type">
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
                    <div className="switch">
                        <input type="checkbox" id="column-multi-value" />
                        <span className="slider round"></span>
                    </div>
                </label>
            </section>
        )
    }

    const renderCallsToAction = () => {
        return (
            <div className="cta-container">
                <button className="btn" onClick={goToDimensionsSelection}>Choose table dimensions</button>
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
