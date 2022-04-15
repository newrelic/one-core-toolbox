import * as React from "react";
import { useState } from "react";
import "../styles/ui.css";
import IconChevronLeft from "../assets/icon-chevron-left.svg";

declare function require(path: string): any;

interface props {
  setActivePlugin: (tab: string) => void;
}

const ThemeSwitcher = (props: props) => {
  const { setActivePlugin } = props;

  const handleTabClick = (nameOfTab: string) => {
    setActivePlugin(nameOfTab);
  };

  // Render the nav tabs in the plugin UI
  const renderNavigationTabs = () => {
    const tabs: string[] = ["theme-switcher"];

    // for each tab in the above array
    return tabs.map((tab, index) => {
      let tabClasses: string[] = ["tab-navigation-tab", "active"];
      let tabClassesOutput = tabClasses.join(" ");
      
      return (
        <li
          className={tabClassesOutput}
          onClick={() => handleTabClick(tab)}
          key={index}
        >
          Theme switcher
        </li>
      );
    });
  };
  
  const setDarkTheme = () => {
    parent.postMessage({ pluginMessage: { type: "theme-switcher-to-dark" } }, "*");
  }
  
  const setLightTheme = () => {
    parent.postMessage({ pluginMessage: { type: "theme-switcher-to-light" } }, "*");
  }

  return (
    <>
      <ul className="tab-navigation">
        <li
          className="tab-navigation-tab back-tab"
          onClick={() => setActivePlugin("home")}
        >
          <img src={IconChevronLeft} alt="back button" />
        </li>
        {renderNavigationTabs()}
      </ul>
      <main className="theme-switcher-container">
        <button onClick={() => setLightTheme()}>Light mode</button>
        <button onClick={() => setDarkTheme()}>Dark mode</button>
      </main>
    </>
  );
};

export default ThemeSwitcher;
