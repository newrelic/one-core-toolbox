// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 300, height: 400, title: "One Core Table Creator" });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

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
  }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
