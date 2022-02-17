import * as React from "react";
import { useState, useEffect } from "react";
import TableCreator from "./TableCreator";
import LanguageLinterPlugin from "./LanguageLinterPlugin";
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
      }
    }
  }, [latestFigmaCommand])

  // Render the nav tabs in the plug UI
  const renderNavigationTabs = () => {
    const tabs: string[] = ["table-creator", "language-linter"];

    // for each tab in the above array
    return tabs.map((tab, index) => {
      let tabClasses: string[] = ["tab-navigation-tab"];
      let tabClassesOutput = tabClasses.join(" ");
      // create the label from the value of `tab`
      let tabLabel =
        tab.charAt(0).toUpperCase() + tab.split("-").join(" ").substring(1);

      // If it's the active tab, apply the class "active" to it
      if (activePlugin === tab) {
        tabClasses.push("active");
        tabClassesOutput = tabClasses.join(" ");
      }

      return (
        <li
          className={tabClassesOutput}
          onClick={() => handleNavigationTabClick(tab)}
          key={index}
        >
          {tabLabel}
        </li>
      );
    });
  };

  const handleNavigationTabClick = (clickedTab: string) => {
    setActivePlugin(clickedTab);

    parent.postMessage(
      {
        pluginMessage: {
          type: "navigate-to-tab",
          tabClicked: clickedTab,
        },
      },
      "*"
    );
  };

  const renderPluginBody = () => {
    switch (activePlugin) {
      case "home":
        return <Home setActivePlugin={setActivePlugin} />;
      case "table-creator":
        return <TableCreator />;
      case "language-linter":
        return <LanguageLinterPlugin />;
    }
  };

  return (
    <div className="app">
      {/*<nav className="tab-navigation">
        <ul className="tab-navigation-tabs">{renderNavigationTabs()}</ul>
      </nav>*/}
      {renderPluginBody()}
    </div>
  );
};

export default App;
