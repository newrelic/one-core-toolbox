import * as React from "react";
import { useState, useEffect } from "react";
import TableCreator from "./TableCreator/TableCreator";
import DesignLinter from "./DesignLinter/DesignLinter";
import Home from "./Home";
import "../styles/ui.css";

declare function require(path: string): any;

const App = ({}) => {
  const [activePlugin, setActivePlugin] = useState("table-creator");
  const [latestFigmaCommand, setLatestFigmaCommand] = useState("");

  // Handle submenu navigation: Part 1
  // When a figma command is sent, store it's contents in state
  useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;

      if (type === "figma-command") {
        setLatestFigmaCommand(message)
      }
    }; 
  }, [])

  // Handle submenu navigation: Part 2
  // Every time `latestFigmaCommand` is updated, handle subnavigation
  useEffect(() => {
    if (latestFigmaCommand.length > 0) {
      switch (latestFigmaCommand) {
        case "open-home":
          setActivePlugin('home')
          break;
        case "open-table-creator":
          setActivePlugin('table-creator')
          break;
        case "open-language-linter":
          setActivePlugin('language-linter')
          break;
        case "open-color-linter":
          setActivePlugin('color-linter')
          break;
      }
    }
  }, [latestFigmaCommand])

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
  }
  
  const renderPluginBody = () => {
    switch (activePlugin) {
      case "home":
        return <Home setActivePlugin={handlePluginNavigation} />;
      case "table-creator":
        return (
          <TableCreator setActivePlugin={handlePluginNavigation} />
        );
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

  return (
    <div className="app">
      {renderPluginBody()}
    </div>
  );
};

export default App;
