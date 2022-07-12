import { getColorStats } from "../color-linter/colorLinter";

// ==============================================================
// Theme switcher
// ==============================================================

// Define the notification here so we can cancel it later
let themeSwitchedNotification = undefined;

interface CustomEventData {
  fileName: string;
  fileKey: string;
  "User Name": string;
  "User Avatar": string;
  "User ID": string;
  "Session ID": number;
  fileUrl: string;
}

export const switchToTheme = async (
  theme: "light" | "dark",
  closeAfterRun: Boolean = false,
  customEventData: CustomEventData
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
