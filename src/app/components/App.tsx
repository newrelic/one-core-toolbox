import * as React from "react";
import { useState, useEffect } from "react";
import Konami from "react-konami-code";
import Team from "../assets/one-core-team-photo.png";
import TableCreator from "./TableCreator/TableCreator";
import DesignLinter from "./DesignLinter/DesignLinter";
import Resizer from "./Resizer";
import ThemeSwitcher from "./ThemeSwitcher";
import { PluginContext } from "./PluginContext";
import Home from "./Home";
import { isEqual } from "./utils";
import "../styles/ui.css";

declare function require(path: string): any;

interface rgbFloat {
  r: number;
  g: number;
  b: number;
}
interface color {
  blendMode: string;
  color: rgbFloat;
  opacity: number;
  type: string;
  visible: boolean;
}
interface colorList {
  color: color[];
  colorId: string;
  colorInHex: string;
  colorStyleId: string;
  colorType: string;
  hasColorStyle: boolean;
  layerId: string;
  layerName: string;
  layerType: string;
  visible: boolean;
}

const App = ({}) => {
  const [activePlugin, setActivePlugin] = useState("home");
  const [latestFigmaCommand, setLatestFigmaCommand] = useState("");
  const [selectedTextLayers, setSelectedTextLayers] = useState([]);
  const [sampleTextIndex, setSampleTextIndex] = useState(0);
  const [localCustomDictionary, setLocalCustomDictionary] = useState([]);
  const [
    localCustomDictionaryInitialized,
    setLocalCustomDictionaryInitialized,
  ] = useState(false);
  const [colorsWithIssues, setColorsWithIssues] = useState<Array<colorList>>(
    []
  );
  const [loadingColorData, setLoadingColorData] = useState<Boolean>(false);
  const [selectionMade, setSelectionMade] = useState<Boolean>(false);
  const [currentSelection, setCurrentSelection] = useState();
  const [incomingSelection, setIncomingSelection] = useState();
  const [currentLayersLintedForLanguage, setCurrentLayersLintedForLanguage] =
    useState();
  const [colorTokens, setColorTokens] = useState();
  const [activeColorTile, setActiveColorTile] = useState<String>();
  const [colorIssuesFixed, setColorIssuesFixed] = useState<Number>(0);
  const [loadingDarkSwitch, setLoadingDarkSwitch] = useState<Boolean>(false);
  const [loadingLightSwitch, setLoadingLightSwitch] = useState<Boolean>(false);

  const triggerNewRelicCustomEvent = (
    eventName: string,
    customData: Object
  ) => {
    // `newrelic` is included at the top of ui.html in a
    // a script tag. Typescript will complain. So...
    // @ts-ignore
    newrelic.addPageAction(eventName, customData);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(customData);
      }, 550);
    });
  };

  // Listen for messages from controller
  useEffect(() => {
    parent.postMessage(
      { pluginMessage: { type: "initialize-selection" } },
      "*"
    );

    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;

      switch (type) {
        // Navigation
        case "figma-command":
          triggerNewRelicCustomEvent(`OneCoreToolbox: plugin-opened`, message);
          setLatestFigmaCommand(message.openedTo);
          break;
        // Keep selection updated (used by several plugins)
        case "initial-selection":
          setCurrentSelection(message);
          break;
        case "selection-changed":
          setIncomingSelection(message);
          break;
        // Table creator
        case "table-created":
          triggerNewRelicCustomEvent("OneCoreToolbox: table-created", message);
          parent.postMessage({ pluginMessage: { type: "close-plugin" } }, "*");
          break;
        // Language linter
        case "new-text-selection":
          // reset the index of the sample text to 0
          setSampleTextIndex(0);

          // Filter out text layers that have no suggestions
          setSelectedTextLayers(message.textLayers);
          setCurrentLayersLintedForLanguage(message.selectedLayers);
          break;
        case "text-linted":
          // triggerNewRelicCustomEvent("OneCoreToolbox: language-linted", {
          //   ...message.customEventData,
          //   suggestions: message.minimalReport,
          // });

          // message.fullReport.forEach((suggestion) => {
          //   triggerNewRelicCustomEvent(
          //     "OneCoreToolbox: language-linter-suggestion-made",
          //     {
          //       ...message.customEventData,
          //       ...suggestion,
          //     }
          //   );
          // });
          break;
        case "local-custom-dictionary-retrieved":
          setLocalCustomDictionaryInitialized(true);
          setLocalCustomDictionary(message);
          break;
        // Color linter
        case "color-stats":
          setLoadingColorData(false);
          setColorsWithIssues(
            message?.colorStats?.colorsNotUsingOneCoreColorStyle
          );
          setSelectionMade(message?.selectionMade);
          setColorTokens(message.colorTokens);
          setColorIssuesFixed(0);

          message?.selectionMade &&
            triggerNewRelicCustomEvent(`OneCoreToolbox: colors-linted`, {
              fileName: message.fileName,
              fileKey: message.fileKey,
              "User Name": message["User Name"],
              "User Avatar": message["User Avatar"],
              "User ID": message["User ID"],
              "Session ID": message["Session ID"],
              selectedLayersWithColor:
                message.colorStats.selectedLayersWithColor.length,
              allInstancesOfColor:
                message.colorStats.allInstancesOfColor.length,
              colorsWithColorStyle:
                message.colorStats.colorsWithColorStyle.length,
              colorsUsingOneCoreStyle:
                message.colorStats.colorsUsingOneCoreStyle.length,
              colorsNotUsingOneCoreColorStyle:
                message.colorStats.colorsNotUsingOneCoreColorStyle.length,
              oneCoreColorStyleCoverage:
                message.colorStats.oneCoreColorStyleCoverage.length,
              idsOfAllInstancesOfColor:
                message.colorStats.idsOfAllInstancesOfColor.length,
            });
          break;
        case "color-replaced":
          triggerNewRelicCustomEvent(`OneCoreToolbox: color-replaced`, {
            ...message,
          });
          break;
        case "loading-light-theme-switch":
          setLoadingLightSwitch(true);
          break;
        case "loading-dark-theme-switch":
          setLoadingDarkSwitch(true);
          break;
        case "theme-switched":
          if (message.switchedTo === "dark") {
            setLoadingDarkSwitch(false);
          } else if (message.switchedTo === "light") {
            setLoadingLightSwitch(false);
          }

          const sendThemeSwitcherEvent = async () => {
            await triggerNewRelicCustomEvent(`OneCoreToolbox: theme-switched`, {
              ...message,
            });

            if (message.closeAfterRun) {
              parent.postMessage(
                { pluginMessage: { type: "close-plugin" } },
                "*"
              );
            }
          };
          sendThemeSwitcherEvent();
          break;
      }
    };
  }, []);

  // Handle submenu navigation: Part 2
  // Every time `latestFigmaCommand` is updated, handle subnavigation
  useEffect(() => {
    if (latestFigmaCommand.length > 0) {
      switch (latestFigmaCommand) {
        case "open-home":
          setActivePlugin("home");
          break;
        case "open-table-creator":
          setActivePlugin("table-creator");
          break;
        case "open-theme-switcher":
          setActivePlugin("theme-switcher");
          break;
        case "open-language-linter":
          setActivePlugin("language-linter");
          break;
        case "open-color-linter":
          setActivePlugin("color-linter");
          break;
        case "open-language-linter":
          setActivePlugin("language-linter");
          break;
      }
    }
  }, [latestFigmaCommand]);

  useEffect(() => {
    if (currentSelection && incomingSelection) {
      if (!isEqual(currentSelection, incomingSelection)) {
        setCurrentSelection(incomingSelection);
      }
    }
  }, [incomingSelection]);

  const handlePluginNavigation = (destination) => {
    setActivePlugin(destination);

    parent.postMessage(
      {
        pluginMessage: {
          type: "navigate-to-tab",
          tabClicked: destination,
        },
      },
      "*"
    );
  };

  const memorial = () => {
    return (
      <Konami timeout={10000}>
        <div className="thank-you-container">
          <img src={Team} className="team-photo" />
          <p>
            To one of the greatest groups of folks I've ever worked with: Thank
            you ❤️
          </p>
          <cite>– Daniel</cite>
        </div>
      </Konami>
    );
  };

  const renderPluginBody = () => {
    switch (activePlugin) {
      case "home":
        return <Home setActivePlugin={handlePluginNavigation} />;
      case "table-creator":
        return <TableCreator setActivePlugin={handlePluginNavigation} />;
      case "language-linter":
        return (
          <DesignLinter
            setActivePlugin={handlePluginNavigation}
            openTo={"language"}
          />
        );
      case "theme-switcher":
        return <ThemeSwitcher setActivePlugin={handlePluginNavigation} />;
      case "color-linter":
        return (
          <DesignLinter
            setActivePlugin={handlePluginNavigation}
            openTo={"color"}
          />
        );
    }
  };

  /*-- vars for context --*/
  const functions = {
    handlePluginNavigation,
    triggerNewRelicCustomEvent,
  };

  const state = {
    selectedTextLayers,
    setSelectedTextLayers,
    sampleTextIndex,
    setSampleTextIndex,
    localCustomDictionary,
    setLocalCustomDictionary,
    localCustomDictionaryInitialized,
    setLocalCustomDictionaryInitialized,
    colorsWithIssues,
    setColorsWithIssues,
    loadingColorData,
    setLoadingColorData,
    selectionMade,
    setSelectionMade,
    currentSelection,
    incomingSelection,
    currentLayersLintedForLanguage,
    colorTokens,
    activeColorTile,
    setActiveColorTile,
    colorIssuesFixed,
    setColorIssuesFixed,
    loadingDarkSwitch,
    loadingLightSwitch,
  };

  return (
    <PluginContext.Provider value={{ functions, state }}>
      <Resizer />
      <div className="app">{renderPluginBody()}</div>
      {memorial()}
    </PluginContext.Provider>
  );
};

export default App;
