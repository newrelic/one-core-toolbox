import * as React from 'react';
import { useState } from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const App = ({}) => {
    const [activeCol, setactiveCol] = useState(0);
    const [activeRow, setactiveRow] = useState(0);
    const [hoveredCol, setHoveredCol] = useState(0);
    const [hoveredRow, setHoveredRow] = useState(0);
    const [activeGridSquares, setActiveGridSquares] = useState([activeRow, activeCol]);
    const [tableHovered, setTableHovered] = useState(false);

    const handeGridSelectionInputs = (type) => {
        if (type === 'col') {
            setactiveCol(parseInt(event.target.value))
        } else if (type === 'row') {
            setactiveRow(parseInt(event.target.value))
        }
    };

    const handleGridSquareMouseEnter = (colIndex, rowIndex ) => {
        setHoveredCol(colIndex)
        setHoveredRow(rowIndex)
    }

    const handleGridSquareClick = (colIndex, rowIndex) => {
        setactiveCol(colIndex + 1)
        setactiveRow(rowIndex + 1)
    }

    const createTable = () => {
        parent.postMessage({ 
            pluginMessage: { 
              type: 'create-table',
              cols: activeCol,
              rows: activeRow
            } 
          }, '*')
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

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const {type, message} = event.data.pluginMessage;
            if (type === 'create-rectangles') {
                console.log(`Figma Says: ${message}`);
            }
        };
    }, []);

    return (
        <div>
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
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="number-of-rows">Rows</label>
                    <input 
                        type="number" 
                        min="0" 
                        max="1000" 
                        name="number-of-rows" 
                        id="number-of-rows" 
                        className="number-of-rows" 
                        onChange={() => handeGridSelectionInputs('row')}
                        value={activeRow === 0 && activeCol === 0 ? '' : activeRow} 
                    />
                </div>
            </div>

            {renderTable()}

            <hr />

            <div className="cta-container">
                <button className="btn">Configure Columns</button>
                <button className="btn btn-primary btn-create-table" onClick={createTable}>Create table</button>
            </div>
        </div>
    );
};

export default App;
