figma.showUI(__html__, { width: 300, height: 412 });

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'create-table') {
        const tableFrame = figma.createFrame()
        let headerCell = await figma.importComponentByKeyAsync('ce8fa8e8cab07a19f83f4181ac8cbe76093c6bc3')
        let bodyCell = await figma.importComponentByKeyAsync('8917ab43ec000963ea1d3e1c9c0cdbe23edf0c9e')
        let tableRow = figma.createComponent()
        
        tableFrame.name = 'Table';
        tableFrame.counterAxisSizingMode = 'AUTO';
        tableFrame.layoutMode = 'VERTICAL';
        
        tableRow.layoutMode = 'HORIZONTAL';
        tableRow.counterAxisSizingMode = 'AUTO';
        tableRow.name = 'Row';

        headerCell.variantProperties.Type = "Body"

        function createTableRow () {
        for (let i = 0; i < msg.cols; i++) {
            tableRow.appendChild(headerCell.createInstance())
        }

        tableFrame.appendChild(tableRow)
        
        for (let i = 0; i < msg.rows; i++) {
            tableFrame.appendChild(tableRow.createInstance())
        }


        tableFrame.children.map((row, index) => {
            if (index > 0) {
            row.children.map(cell => {
                cell.swapComponent(bodyCell)
            })
            }
        })

        }
        
        createTableRow()

            // This is how figma responds back to the ui
            figma.ui.postMessage({
                type: 'create-rectangles',
                message: `Created ${msg.count} Rectangles`,
            });
        }

    figma.closePlugin();
};
