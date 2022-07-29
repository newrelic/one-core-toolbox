import { createTable } from "./table-creator/tableCreator";
import { sendCurrentTextSelection } from "./language-linter/languageLinter";
import { getColorStats, getColorTokens } from "./color-linter/colorLinter";
import { switchToTheme } from "./theme-switcher/themeSwitcher";
import { selectAndZoomToLayer } from "../app/components/utils";

interface Message {
  type: string;
  [key: string]: any;
}

// Set the default size of the plugin window
let uiSize = {
  width: 300,
  height: 448,
};

// Prepare custom meta data to send to New Relic
//
// TODO: Move this into it's own file to be imported everywhere
//       it's used. Rather than adding an extra argument in each
//       function where it's used (the current implementation).
const fileName = encodeURIComponent(figma.currentPage.parent.name);
const currentSelection = figma.currentPage.selection;
const currentNodeId = encodeURIComponent(
  currentSelection.length > 0 ? currentSelection[0].id : figma.currentPage.id
);

// So that you can click a link in the dashboard and have it open in a
const fileUrl = `https://figma.com/file/${figma.fileKey}/${fileName}?node-id=${currentNodeId}`;

let customEventData = {
  fileName: figma.currentPage.parent.name,
  fileKey: figma.fileKey,
  // setting them in title case because that's how
  // I did it originally and though I regret it,
  // I don't want to lose track of historical data
  "User Name": figma.currentUser.name,
  "User Avatar": figma.currentUser.photoUrl,
  "User ID": figma.currentUser.id,
  "Session ID": figma.currentUser.sessionId,
  fileUrl,
};

// ==============================================================
// Handle navigation
// https://www.figma.com/plugin-docs/api/figma/#command
// ==============================================================

// handle submenu navigation
const navigateTo = (screen: string) => {
  figma.ui.postMessage({
    type: "figma-command",
    message: {
      openedTo: screen,
      ...customEventData,
    },
  });
};

const navigationActions = {
  "open-home": () => {
    figma.showUI(__html__, { themeColors: true, width: 300, height: 448 });
    navigateTo("open-home");
  },
  "open-table-creator": () => {
    figma.showUI(__html__, { themeColors: true, width: 300, height: 448 });
    navigateTo("open-table-creator");
  },
  "theme-switcher-to-light": () => {
    switchToTheme("light", true, customEventData);
  },
  "theme-switcher-to-dark": () => {
    switchToTheme("dark", true, customEventData);
  },
  "open-language-linter": () => {
    figma.showUI(__html__, { themeColors: true, width: 475, height: 500 });
    navigateTo("open-language-linter");
  },
  "open-color-linter": () => {
    figma.showUI(__html__, { themeColors: true, width: 475, height: 500 });
    navigateTo("open-color-linter");
  },
};

// Choose the proper route based on the incoming command
navigationActions[figma.command]();

// ==============================================================
// Receiving messages sent from the UI
// https://www.figma.com/plugin-docs/creating-ui#sending-a-message-from-the-plugin-code-to-the-ui
// ==============================================================

const incomingMessageActions = {
  // Generic actions
  "navigate-to-tab": (msg: Message) => {
    const tabDestinations = {
      home: () => {
        uiSize = {
          width: 300,
          height: 448,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-home");
      },
      "table-creator": () => {
        uiSize = {
          width: 300,
          height: 448,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-table-creator");
      },
      "language-linter": () => {
        sendCurrentTextSelection();
        uiSize = {
          width: 475,
          height: 500,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-language-linter");
      },
      "color-linter": () => {
        uiSize = {
          width: 475,
          height: 500,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-color-linter");
      },
    };

    tabDestinations[msg.tabClicked]();
  },
  "display-error": (msg: Message) => {
    figma.notify(msg.content, { error: true });
  },
  "select-layer": (msg: Message) => {
    selectAndZoomToLayer(msg.layerId);
  },
  "initialize-selection": () => {
    figma.ui.postMessage({
      type: "initial-selection",
      message: figma.currentPage.selection,
    });
  },
  resize: (msg: Message) => {
    figma.ui.resize(
      msg.size.x >= uiSize.width ? msg.size.x : uiSize.width,
      msg.size.y >= uiSize.height ? msg.size.y : uiSize.height
    );
  },
  "close-plugin": () => {
    figma.closePlugin();
  },

  // Table creator actions
  "create-table": (msg: Message) => {
    createTable(msg, customEventData);
  },

  // Language linter actions
  "run-language-linter": () => {
    sendCurrentTextSelection();

    figma.ui.postMessage({
      type: "language-linter-run",
      message: {
        customEventData,
      },
    });
  },
  "request-local-custom-dictionary": () => {
    figma.clientStorage
      .getAsync("languageLinterCustomDictionary")
      .then((result) => {
        figma.ui.postMessage({
          type: "local-custom-dictionary-retrieved",
          message: result ? result : [],
        });
      });
  },
  "get-sample-text": () => {
    const sampleText = figma.currentPage.selection;
    figma.ui.postMessage({ type: "sample-text", message: sampleText });
  },
  "sample-text-changed": (msg: Message) => {
    selectAndZoomToLayer(msg.activeNodeId);
  },
  "update-source-text": async (msg: Message) => {
    const activeTextLayer = figma.getNodeById(msg.layerId) as TextNode;
    let fontName = activeTextLayer.fontName;

    if (fontName === figma.mixed) {
      // process each character individually
      // or simply get the color of the first character
      await Promise.all(
        activeTextLayer
          .getRangeAllFontNames(0, activeTextLayer.characters.length)
          .map(figma.loadFontAsync)
      );
    } else {
      await figma.loadFontAsync(fontName);
    }

    activeTextLayer.deleteCharacters(0, activeTextLayer.characters.length);
    activeTextLayer.insertCharacters(0, msg.updatedText);

    figma.ui.postMessage({
      type: "source-text-updated",
      message: msg.updatedText,
    });
  },
  "text-linted": (msg: Message) => {
    figma.ui.postMessage({
      type: "text-linted",
      message: {
        customEventData,
        minimalReport: msg.minimalReport,
        fullReport: msg.fullReport,
      },
    });
  },

  // Color linter
  "run-color-linter": () => {
    const sendColorData = async () => {
      const colorStats = await getColorStats();

      figma.ui.postMessage({
        type: "color-stats",
        message: {
          ...customEventData,
          colorStats: colorStats,
          colorTokens: await getColorTokens(false),
          selectionMade: figma.currentPage.selection.length > 0,
        },
      });
    };

    sendColorData();
  },

  "apply-color-style": (msg: Message) => {
    figma.importStyleByKeyAsync(msg.colorStyleKey).then((imported) => {
      figma.getNodeById(msg.layerId)[`${msg.colorType}StyleId`] = imported.id;

      figma.ui.postMessage({
        type: "color-replaced",
        message: {
          ...customEventData,
          layerId: msg.layerId,
          layerName: figma.getNodeById(msg.layerId).name,
          originalColor: msg.originalColor,
          colorStyleKey: msg.colorStyleKey,
          colorStyleName: msg.colorStyleName,
          colorStyleColor: msg.colorStyleColor,
        },
      });
    });
  },

  /*-- Theme switcher messages --*/
  "theme-switcher-to-dark": () => {
    switchToTheme("dark", false, customEventData);
  },
  "theme-switcher-to-light": () => {
    switchToTheme("light", false, customEventData);
  },
};

figma.ui.onmessage = async (msg) => {
  incomingMessageActions[msg.type](msg);
};

// ==============================================================
// Figma Events
// https://www.figma.com/plugin-docs/api/properties/figma-on
// ==============================================================
figma.on("selectionchange", () => {
  figma.ui.postMessage({
    type: "selection-changed",
    message: figma.currentPage.selection,
  });
});
