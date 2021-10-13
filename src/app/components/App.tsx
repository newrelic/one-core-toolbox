import * as React from 'react';
import { useState } from 'react';
import '../styles/ui.css';
import DimensionsSelection from './DimensionsSelection';

declare function require(path: string): any;

const App = ({}) => {
    const [activeCol, setactiveCol] = useState(0);
    const [activeRow, setactiveRow] = useState(0);

    // const allYourPropAreBelongToMe = () => {
        
    // }

    const handleGridSquareClick = (colIndex, rowIndex) => {
        setactiveCol(colIndex + 1)
        setactiveRow(rowIndex + 1)
    }

    return (
        <DimensionsSelection 
            handleGridSquareClick={handleGridSquareClick} 
            activeCol={activeCol}  
            activeRow={activeRow}  
        />
    );
};

export default App;
