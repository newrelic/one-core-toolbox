import * as React from "react";
import { useState, useEffect } from "react";
import TableCreator from "./TableCreator";
import "../styles/ui.css";
import LanguageLinter from "./LanguageLinter";

declare function require(path: string): any;

const App = ({}) => {
  const [activePlugin, setActivePlugin] = useState("table-creator");

  // Render the nav tabs in the plug UI
  const renderNavigationTabs = () => {
    const tabs: string[] = ["table-creator", "more-coming-soon..."];

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
        >
          {tabLabel}
        </li>
      );
    });
  };

  const handleNavigationTabClick = (clickedTab: string) => {
    setActivePlugin(clickedTab);
  };

  const renderPluginBody = () => {
    switch (activePlugin) {
      case "table-creator":
        return <TableCreator />;
      case "language-linter":
        return <LanguageLinter />;
    }
  };

  return (
    <>
      <nav className="tab-navigation">
        <ul className="tab-navigation-tabs">{renderNavigationTabs()}</ul>
      </nav>
      {renderPluginBody()}
    </>
  );
};

export default App;
