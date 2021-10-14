import * as React from 'react';
import { useState } from 'react';
import '../styles/ui.css';
import ColumnConfiguration from './ColumnConfiguration';
import DimensionsSelection from './DimensionsSelection';

declare function require(path: string): any;

const App = ({}) => {
    const [activeScreen, setActiveScreen] = useState('DimensionsSelection')
    const [activeCol, setActiveCol] = useState(0);
    const [activeRow, setActiveRow] = useState(0);

    const handeGridSelectionInputs = (type) => {
        if (type === 'col') {
            setActiveCol(parseInt(event.target.value))
        } else if (type === 'row') {
            setActiveRow(parseInt(event.target.value))
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
              rows: activeRow
            } 
          }, '*')
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
                />
            )
        } else if (activeScreen === 'DimensionsSelection') {
            return <ColumnConfiguration />
        }
    }

    return handleRouting()
};

export default App;
