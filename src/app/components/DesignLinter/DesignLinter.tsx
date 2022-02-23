import * as React from "react";
import { useState } from "react";
import "../../styles/ui.css";
import ColorLinter from "./ColorLinter";
import LanguageLinterPlugin from "./LanguageLinterPlugin";
import IconChevronLeft from '../../assets/icon-chevron-left.svg';

declare function require(path: string): any;

interface props {
  setActivePlugin: (tab: string) => void,
  openTo: string,
}

const DesignLinter = (props: props) => {
  const { setActivePlugin, openTo } = props

  const [activeTab, setActiveTab] = useState(openTo);
  // const [activeScreen, setActiveScreen] = useState(openTo);

  // Render the nav tabs in the plugin UI
  const renderNavigationTabs = () => {
    const tabs: string[] = ["language", "color"];

    // for each tab in the above array
    return tabs.map((tab, index) => {
      let tabClasses: string[] = ["tab-navigation-tab"];
      let tabClassesOutput = tabClasses.join(" ");
      // create the label from the value of `tab`
      let tabLabel =
        tab.charAt(0).toUpperCase() + tab.split("-").join(" ").substring(1);

      // If it's the active tab, apply the class "active" to it
      if (activeTab === tab) {
        tabClasses.push("active");
        tabClassesOutput = tabClasses.join(" ");
      }

      return (
        <li
          className={tabClassesOutput}
          onClick={() => setActiveTab(tab)}
          key={index}
        >
          {tabLabel}
        </li>
      );
    });
  };

  const renderDesignLinter = () => {
    switch(activeTab) {
      case 'language':
        return <LanguageLinterPlugin />
      case 'color':
        return <ColorLinter />
    }
  }

  return (
    <>
      <ul className="tab-navigation">
        <li 
          className="tab-navigation-tab back-tab" 
          onClick={() => setActivePlugin('home')}
        >
          <img src={IconChevronLeft} alt="back button" />
        </li>
        {renderNavigationTabs()}
      </ul>
      {renderDesignLinter()}
    </>
  )
};

export default DesignLinter;
