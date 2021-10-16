figma.showUI(__html__, { width: 300, height: 412 });

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'create-table') {
        const tableFrame = figma.createFrame()
        let headerCell = await figma.importComponentByKeyAsync('ce8fa8e8cab07a19f83f4181ac8cbe76093c6bc3')
        let tableRow = figma.createComponent()
        let cellFillContainerY = false;
        
        await figma.loadFontAsync({ family: "Open Sans", style: "Regular" })
        
        tableFrame.name = 'Table';
        tableFrame.counterAxisSizingMode = 'AUTO';
        tableFrame.layoutMode = 'VERTICAL';
        tableFrame.x = figma.viewport.center.x
        tableFrame.y = figma.viewport.center.y
        
        headerCell.variantProperties.Type = "Body";

        // if any cell is set to Multi-value, set a variable we'll use later
        msg.columnConfiguration.find(col => cellFillContainerY = col.multiValue);

        [...Array(msg.rows + 1).keys()].map((rowIndex) => {
            
            tableRow.layoutMode = 'HORIZONTAL';
            tableRow.counterAxisSizingMode = 'AUTO';
            tableRow.name = 'Row';
            // tableRow.layoutAlign = 'STRETCH'
            // tableRow.primaryAxisSizingMode = 'FIXED';
            

            msg.columnConfiguration.map(async (col, i, arr) => {
                let { name: colName, alignment: colAlignment, cellType: colCellType, multiValue: colMultiValue } = col;

                colAlignment = colAlignment[0].toUpperCase() + colAlignment.substring(1)
                colCellType = colCellType[0].toUpperCase() + colCellType.substring(1)
                colMultiValue = colMultiValue.toString()
                colMultiValue = colMultiValue[0].toUpperCase() + colMultiValue.substring(1)

                if (rowIndex === 0) {
                    let thisHeaderCell = headerCell.createInstance()
                    let textNodeOfHeaderCell = thisHeaderCell.children[0].children[0]
                    
                    thisHeaderCell.name = colName.length > 0 ? colName : 'Header';

                    textNodeOfHeaderCell.deleteCharacters(0, textNodeOfHeaderCell.characters.length)
                    textNodeOfHeaderCell.insertCharacters(0, colName.length > 0 ? colName : 'Header')
                    thisHeaderCell.setProperties({ "Alignment" : colAlignment})

                    // thisHeaderCell.layoutGrow = 1;

                    // if any cell is set to Multi-value then make all of them "fill container" vertically
                    thisHeaderCell.children[0].layoutGrow = cellFillContainerY ? 1 : 0;
                    
                    
                    tableRow.appendChild(thisHeaderCell)
                } 
            }) 

            if (rowIndex === 0 ) {
                tableFrame.appendChild(tableRow)
            } else {
                let thisTableRow = tableRow.createInstance();

                // thisTableRow.layoutAlign = 'STRETCH'
                // thisTableRow.primaryAxisSizingMode = 'FIXED';
                
                thisTableRow.children.map((cell, index) => {
                    let { cellType: colCellType, multiValue: colMultiValue } = msg.columnConfiguration[index];
    
                    colCellType = colCellType[0].toUpperCase() + colCellType.substring(1)
                    colMultiValue = colMultiValue.toString()
                    colMultiValue = colMultiValue[0].toUpperCase() + colMultiValue.substring(1)

                    cell.setProperties({'Type': 'Body'})
                    cell.children[0].children[0].setProperties({
                        "Type": colCellType,
                        "Multi-value": colMultiValue,
                    })
                })

                tableFrame.appendChild(thisTableRow)
            }
        })
    }
    
    if (msg.type === 'creation-feedback') {
        figma.notify('✅ Table created');
    }
    figma.closePlugin();
};
