import * as React from "react";
import { useState, useEffect } from "react";
import TableCreator from "./TableCreator/TableCreator";
import DesignLinter from "./DesignLinter/DesignLinter";
import { PluginContext } from "./PluginContext";
import Home from "./Home";
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
  const [activePlugin, setActivePlugin] = useState("table-creator");
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

  const triggerNewRelicCustomEvent = (
    eventName: string,
    customData: Object
  ) => {
    // newrelic is included at the top of ui.html in a
    // a script tag. Typescript will complain. So...
    // @ts-ignore
    newrelic.addPageAction(eventName, customData);
    console.log("custom event posted", eventName);
  };

  // Handle submenu navigation: Part 1
  // When a figma command is sent, store it's contents in state
  useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;

      switch (type) {
        case "figma-command":
          triggerNewRelicCustomEvent(
            `OneCoreToolbox: ${message.message}`,
            message
          );
          setLatestFigmaCommand(message.message);
          break;
        case "table-created":
          triggerNewRelicCustomEvent("OneCoreToolbox: table-created", message);
          parent.postMessage({ pluginMessage: { type: "close-plugin" } }, "*");
          break;
        case "selection-change":
          // reset the index of the sample text to 0
          setSampleTextIndex(0);

          // Filter out text layers that have no suggestions
          setSelectedTextLayers(message.textLayers);
          break;
        case "text-linted":
          triggerNewRelicCustomEvent("OneCoreToolbox: language-linted", {
            ...message.customEventData,
            suggestions: message.minimalReport,
          });

          message.fullReport.forEach((suggestion) => {
            triggerNewRelicCustomEvent(
              "OneCoreToolbox: language-linter-suggestion-made",
              {
                ...message.customEventData,
                ...suggestion,
              }
            );
          });
          break;
        case "local-custom-dictionary-retrieved":
          console.log(`client storage is: ${JSON.stringify(message)}`);
          setLocalCustomDictionaryInitialized(true);
          setLocalCustomDictionary(message);
          break;
        case "color-stats":
          setLoadingColorData(false);
          setColorsWithIssues(
            message?.colorStats?.colorsNotUsingOneCoreColorStyle
          );
          setSelectionMade(message?.selectionMade);

          message?.selectionMade &&
            triggerNewRelicCustomEvent(`OneCoreToolbox: colors-linted`, {
              // ...message,
              fileName: message.fileName,
              fileKey: message.fileKey,
              "User Name": message["User Name"],
              "User Avatar": message["User Avatar"],
              "User ID": message["User ID"],
              "Session ID": message["Session ID"],
              ...message.colorStats,
            });
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
        case "open-language-linter":
          setActivePlugin("language-linter");
          break;
        case "open-color-linter":
          setActivePlugin("color-linter");
          break;
      }
    }
  }, [latestFigmaCommand]);

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
  };

  return (
    <PluginContext.Provider value={{ functions, state }}>
      <div className="app">{renderPluginBody()}</div>
    </PluginContext.Provider>
  );
};

export default App;
