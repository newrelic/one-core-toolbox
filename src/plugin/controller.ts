import { createTable } from "./table-creator/tableCreator";
import { sendCurrentTextSelection } from "./language-linter/languageLinter";
import { getColorStats, getColorTokens } from "./color-linter/colorLinter";

import { selectAndZoomToLayer } from "../app/components/utils";

// Set the default size of the plugin window
let uiSize = {
  width: 300,
  height: 448,
};

// ==============================================================
// Theme switcher
// ==============================================================

// Define the notification here so we can cancel it later
let themeSwitchedNotification = undefined;

const switchToTheme = async (
  theme: "light" | "dark",
  closeAfterRun: Boolean = false
) => {
  if (closeAfterRun) {
    figma.showUI(__html__, { width: 70, height: 0 });
  } else {
    figma.ui.postMessage({ type: `loading-${theme}-theme-switch` });
  }

  // Check for a selection. If none exists, show error notification.
  if (figma.currentPage.selection.length === 0) {
    // If the notification is already set, turn it off
    themeSwitchedNotification && themeSwitchedNotification?.cancel();

    figma.notify("Select some layers before choosing a theme", { error: true });
    return closeAfterRun && figma.closePlugin();
  }

  // If the notification is already set, turn it off
  themeSwitchedNotification && themeSwitchedNotification?.cancel();

  // Tell the user we're working on the theme change
  const loadingNotification = figma.notify(
    `Converting selection to ${theme} mode...`
  );

  // Get the list of colors that are using one core color styles
  const colorStats = await getColorStats(true);

  let importedStyles = [];
  let keysToLoad: () => string[] = () => {
    let keys = [];

    colorStats.colorsUsingOneCoreStyle.forEach((color) => {
      if ("theme" in color.token && color.token?.theme !== theme) {
        const keyOfTokenInOppositeTheme =
          theme === "light"
            ? color.token.lightThemeToken
            : color.token.darkThemeToken;
        const keyIsNotDuplicate = !keys.some(
          (key) => key === keyOfTokenInOppositeTheme
        );

        // Check to see if there's an available token to switch to
        if (keyOfTokenInOppositeTheme === null) {
          console.error(
            `Missing token: No ${theme} theme token found for "${color.token.name}".`
          );
          return;
        }

        // Add it to the keys array if it's not already there
        keyIsNotDuplicate && keys.push(keyOfTokenInOppositeTheme);
      }
    });

    return keys;
  };

  // Fetch the tokens
  importedStyles = await Promise.all(
    keysToLoad().map(async (key) => figma.importStyleByKeyAsync(key))
  );

  // Replace every one core color style with it's
  // dark mode equivalent
  for (const color of colorStats.colorsUsingOneCoreStyle) {
    if ("theme" in color.token && color.token?.theme !== theme) {
      const node = figma.getNodeById(color.layerId);
      const keyOfTokenInOppositeTheme =
        theme === "light"
          ? color.token.lightThemeToken
          : color.token.darkThemeToken;

      const importedStyle: BaseStyle = importedStyles.filter(
        (style) => style.key === keyOfTokenInOppositeTheme
      )[0];

      // Check to see if there's an available token to switch to
      if (keyOfTokenInOppositeTheme === null) {
        console.error(
          `Missing token: No ${theme} theme token found for "${color.token.name}".`
        );
        return;
      }

      // Get ready to set the token on the layer
      // First, check to see if the layer has segment styles
      if (color.layerHasSegmentStyles) {
        (node as TextNode).setRangeFillStyleId(
          color.segment.start,
          color.segment.end,
          importedStyle.id
        );
      } else {
        // Set the token on the layer
        node[`${color.colorType}StyleId`] = importedStyle.id;
      }
    }
  }

  loadingNotification.cancel();

  const coverageAsInteger = colorStats.oneCoreColorStyleCoverage.substring(
    0,
    colorStats.oneCoreColorStyleCoverage.length - 1
  );
  const isErrorWorthy = parseInt(coverageAsInteger) < 50;

  if (colorStats.oneCoreColorStyleCoverage === "100%") {
    themeSwitchedNotification = figma.notify(
      `${theme === "light" ? "🔆" : "🌙"} Selection set to ${theme} mode`
    );
  } else {
    themeSwitchedNotification = figma.notify(
      `✋ Warning: Only ${colorStats.oneCoreColorStyleCoverage} converted to 
      ${theme} mode because some colors aren't using One Core color styles.`,
      { timeout: isErrorWorthy ? 999999999 : 15000, error: isErrorWorthy }
    );
  }

  figma.ui.postMessage({
    type: "theme-switched",
    message: {
      switchedTo: theme,
      closeAfterRun,
      colorsUsingOneCoreStyle: colorStats.colorsUsingOneCoreStyle.length,
      colorsSelected: colorStats.allInstancesOfColor.length,
      colorsSwitched: colorStats.oneCoreColorStyleCoverage,
      ...customEventData,
    },
  });
};

// ==============================================================
// Handle navigation
// ==============================================================

// Used to send a custom event to New Relic

const fileName = encodeURIComponent(figma.currentPage.parent.name);
const currentSelection = figma.currentPage.selection;
const currentNodeId = encodeURIComponent(
  currentSelection.length > 0 ? currentSelection[0].id : figma.currentPage.id
);

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
    switchToTheme("light", true);
  },
  "theme-switcher-to-dark": () => {
    switchToTheme("dark", true);
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

navigationActions[figma.command]();

// ==============================================================
// Receiving messages sent from the UI
// ==============================================================

figma.ui.onmessage = async (msg) => {
  /*-- Handle tab navigation messages --*/
  if (msg.type === "navigate-to-tab") {
    switch (msg.tabClicked) {
      case "home":
        uiSize = {
          width: 300,
          height: 448,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-home");
        break;
      case "table-creator":
        uiSize = {
          width: 300,
          height: 448,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-table-creator");
        break;
      case "language-linter":
        sendCurrentTextSelection();
        uiSize = {
          width: 475,
          height: 500,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-language-linter");
        break;
      case "color-linter":
        uiSize = {
          width: 475,
          height: 500,
        };
        figma.ui.resize(uiSize.width, uiSize.height);
        navigateTo("open-color-linter");
        break;
    }
  }
  if (msg.type == "display-error") {
    figma.notify(msg.content, { error: true });
  }

  if (msg.type === "initialize-selection") {
    figma.ui.postMessage({
      type: "initial-selection",
      message: figma.currentPage.selection,
    });
  }

  if (msg.type === "close-plugin") {
    figma.closePlugin();
  }

  /*-- Table creator messages --*/
  if (msg.type === "create-table") {
    createTable(msg, customEventData);
  }

  /*-- Language linter messages --*/
  if (msg.type === "run-language-linter") {
    sendCurrentTextSelection();
  }

  if (msg.type === "request-local-custom-dictionary") {
    figma.clientStorage
      .getAsync("languageLinterCustomDictionary")
      .then((result) => {
        figma.ui.postMessage({
          type: "local-custom-dictionary-retrieved",
          message: result ? result : [],
        });
      });
  }

  if (msg.type === "add-to-dictionary") {
    figma.clientStorage
      .getAsync("languageLinterCustomDictionary")
      .then((result) => {
        let newCustomDictionary = result ? result : [];

        newCustomDictionary.push(msg.wordToAdd);

        figma.clientStorage.setAsync(
          "languageLinterCustomDictionary",
          newCustomDictionary
        );
      });
  }

  if (msg.type === "get-sample-text") {
    const sampleText = figma.currentPage.selection;
    figma.ui.postMessage({ type: "sample-text", message: sampleText });
  }

  // scroll and zoom the active layer into the center of the screen
  if (msg.type === "sample-text-changed") {
    selectAndZoomToLayer(msg.activeNodeId);
  }

  if (msg.type === "update-source-text") {
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
  }

  if (msg.type === "text-linted") {
    figma.ui.postMessage({
      type: "text-linted",
      message: {
        customEventData,
        minimalReport: msg.minimalReport,
        fullReport: msg.fullReport,
      },
    });
  }

  /*-- Color linter messages --*/
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
  if (msg.type === "run-color-linter") {
    sendColorData();
  }

  if (msg.type === "select-layer") {
    selectAndZoomToLayer(msg.layerId);
  }

  if (msg.type === "apply-color-style") {
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
  }

  if (msg.type === "resize") {
    figma.ui.resize(
      msg.size.x >= uiSize.width ? msg.size.x : uiSize.width,
      msg.size.y >= uiSize.height ? msg.size.y : uiSize.height
    );
  }

  /*-- Theme switcher messages --*/
  if (msg.type === "theme-switcher-to-dark") {
    switchToTheme("dark");
  }
  if (msg.type === "theme-switcher-to-light") {
    switchToTheme("light");
  }
};

// ==============================================================
// Figma Events
// https://www.figma.com/plugin-docs/api/properties/figma-on
// ==============================================================
figma.on("selectionchange", () => {
  console.log("selectionchange event was fired");

  figma.ui.postMessage({
    type: "selection-changed",
    message: figma.currentPage.selection,
  });
});
