import * as React from 'react';
import { useState } from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const DimensionsSelection = (
    { 
        handleGridSquareClick, 
        activeCol, 
        activeRow, 
        createTable, 
        handeGridSelectionInputs,
        goToColumnConfiguration
    }
    ) => {

    const [hoveredCol, setHoveredCol] = useState(0);
    const [hoveredRow, setHoveredRow] = useState(0);
    const [tableHovered, setTableHovered] = useState(false);

    const handleGridSquareMouseEnter = (colIndex, rowIndex ) => {
        setHoveredCol(colIndex)
        setHoveredRow(rowIndex)
    }

    

    const renderTable = () => {
        return (
            <table 
                className={`grid-selector ${tableHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setTableHovered(true)}
                onMouseLeave={() => setTableHovered(false)}
            >
                <tbody>
                    {
                        [...Array(8).keys()].map((rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {
                                        [...Array(8).keys()].map((colIndex) => {
                                            return (
                                                <td 
                                                    className={`input__radio`}
                                                    key={colIndex} 
                                                >
                                                    <input type="radio" id={`t${rowIndex + 1}x${colIndex + 1}`} name="selection" />
                                                    <label 
                                                        htmlFor={`t${rowIndex + 1}x${colIndex + 1}`} 
                                                        onMouseEnter={() => handleGridSquareMouseEnter(colIndex, rowIndex)}
                                                        onClick={() => handleGridSquareClick(colIndex, rowIndex)}
                                                        className={`
                                                            ${colIndex <= hoveredCol && rowIndex <= hoveredRow ? 'hovered' : ''} 
                                                            ${(colIndex < activeCol && rowIndex < activeRow) && !(activeRow === 0 && activeCol === 0) ? 'active' : ''}`
                                                        }
                                                    >
                                                        
                                                    </label>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    return (
        <div className="dimensions-selection-container">
            <div className="table-dimensions-config">
                <div className="input-container">
                    <label htmlFor="number-of-cols">Columns</label>
                    <input 
                        type="number" 
                        min="0" 
                        max="24" 
                        name="number-of-cols" 
                        id="number-of-cols" 
                        className="number-of-cols" 
                        onChange={() => handeGridSelectionInputs('col')}
                        value={activeCol === 0 && activeRow === 0 ? '' : activeCol}
                        placeholder={tableHovered ? hoveredCol + 1 : ''} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="number-of-rows">Rows</label>
                    <input 
                        type="number" 
                        min="0" 
                        max="100" 
                        name="number-of-rows" 
                        id="number-of-rows" 
                        className="number-of-rows" 
                        onChange={() => handeGridSelectionInputs('row')}
                        value={activeRow === 0 && activeCol === 0 ? '' : activeRow}
                        placeholder={tableHovered ? hoveredRow + 1 : ''} 
                    />
                </div>
            </div>

            {renderTable()}

            <hr />

            <div className="cta-container">
                <button className={`btn`} disabled={activeCol < 1} onClick={goToColumnConfiguration}>Format cells</button>
                <button className="btn btn-primary btn-create-table" onClick={createTable}>Create table</button>
            </div>
        </div>
    );
};

export default DimensionsSelection;
