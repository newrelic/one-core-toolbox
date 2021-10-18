import * as React from 'react';
import { useState, useEffect } from 'react';
import '../styles/ui.css';
import ColumnConfiguration from './ColumnConfiguration';
import DimensionsSelection from './DimensionsSelection';

declare function require(path: string): any;

const App = ({}) => {
    const [activeScreen, setActiveScreen] = useState('DimensionsSelection')
    const [activeCol, setActiveCol] = useState(0);
    const [activeRow, setActiveRow] = useState(0);
    const [columnConfiguration, setColumnConfiguration] = useState([]);

    const handleColumnConfiguration = () => {
        let columnConfigurationArray = [];
        
        if (columnConfiguration.length === 0) {
            [...Array(activeCol).keys()].map(() => {
                columnConfigurationArray.push(
                    {
                        name: '',
                        alignment: 'Left',
                        cellType: 'Text',
                        multiValue: false
                    }
                )
            })
        } else if (columnConfiguration.length > 0) {
            columnConfigurationArray = columnConfiguration;

            if (columnConfigurationArray.length > activeCol) {
                const columnsToRemove = columnConfigurationArray.length - activeCol;
                [...Array(columnsToRemove).keys()].map(() => {
                    columnConfigurationArray.pop()
                }) 
            } else {
                const columnsToAdd = activeCol - columnConfigurationArray.length; 
                [...Array(columnsToAdd).keys()].map(() => {
                    columnConfigurationArray.push(
                        {
                            name: '',
                            alignment: 'Left',
                            cellType: 'Text',
                            multiValue: false
                        }
                    )
                })
            }
        }

        setColumnConfiguration(columnConfigurationArray)
    }

    useEffect(handleColumnConfiguration, [activeCol])

    const handeGridSelectionInputs = (type) => {
        let { value, min, max } = event.target;

        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        if (type === 'col') {
            setActiveCol(parseInt(value))
        } else if (type === 'row') {
            setActiveRow(parseInt(value))
        }
    };

    const handleGridSquareClick = (colIndex, rowIndex) => {
        setActiveCol(colIndex + 1)
        setActiveRow(rowIndex + 1)
    }
    
    const createTable = () => {
        parent.postMessage({ 
            pluginMessage: { 
              type: 'create-table',
              cols: activeCol,
              rows: activeRow,
              columnConfiguration: columnConfiguration
            } 
          }, '*')

        parent.postMessage({pluginMessage: {type: 'creation-feedback'}}, '*');
    }

    const goToColumnConfiguration = () => {
        setActiveScreen('ColumnConfiguration')
    }
    
    const goToDimensionsSelection = () => {
        setActiveScreen('DimensionsSelection')
    }

    const handleRouting = () => {
        if (activeScreen === 'DimensionsSelection') {
            return (
                <DimensionsSelection 
                    handleGridSquareClick={handleGridSquareClick} 
                    activeCol={activeCol}  
                    activeRow={activeRow}  
                    createTable={createTable}
                    handeGridSelectionInputs={handeGridSelectionInputs}
                    goToColumnConfiguration={goToColumnConfiguration}
                />
            )
        } else if (activeScreen === 'ColumnConfiguration') {
            return <ColumnConfiguration
                     createTable={createTable} 
                     goToDimensionsSelection={goToDimensionsSelection}
                     activeCol={activeCol}
                     columnConfiguration={columnConfiguration}
                     setColumnConfiguration={setColumnConfiguration}
                    />
        }
    }

    // Send user data to monitoring tool
    // React.useEffect(() => {
    //     // This is how we read messages sent from the plugin controller
    //     window.onmessage = (event) => {
    //         const {type, message} = event.data.pluginMessage;
    //         if (type === 'current-user') {
    //             console.log(`Figma Says: ${JSON.stringify(message)}`);
    //         }
    //     };
    // }, []);

    return handleRouting()
};

export default App;
