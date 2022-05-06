import * as React from "react";
import { useState } from "react";
import "../../styles/ui.css";
import ColorLinter from "./ColorLinter";
import LanguageLinterPlugin from "./LanguageLinterPlugin";
import IconChevronLeft from "../../assets/icon-chevron-left.svg";

declare function require(path: string): any;

interface props {
  setActivePlugin: (tab: string) => void;
  openTo: string;
}

const DesignLinter = (props: props) => {
  const { setActivePlugin, openTo } = props;
  const [activeTab, setActiveTab] = useState(openTo);

  const handleTabClick = (nameOfTab: string) => {
    const tabAsSingleWord = nameOfTab.split("-")[0];

    setActiveTab(tabAsSingleWord);
    setActivePlugin(nameOfTab);
  };

  // Render the nav tabs in the plugin UI
  const renderNavigationTabs = () => {
    const tabs: string[] = ["color-linter", "language-linter"];

    // for each tab in the above array
    return tabs.map((tab, index) => {
      let tabClasses: string[] = ["tab-navigation-tab"];
      let tabClassesOutput = tabClasses.join(" ");
      // create the label from the value of `tab`
      let tabLabel =
        tab.charAt(0).toUpperCase() + tab.split("-")[0].substring(1);

      // If it's the active tab, apply the class "active" to it
      if (activeTab + "-linter" === tab) {
        tabClasses.push("active");
        tabClassesOutput = tabClasses.join(" ");
      }
      
      if (tabLabel === 'Language') {
        tabLabel = 'Language (beta)'
        tabClassesOutput = `${tabClassesOutput} language-beta-tab`
      }

      return (
        <li
          className={tabClassesOutput}
          onClick={() => handleTabClick(tab)}
          key={index}
        >
          {tabLabel} {tabLabel === 'Language' && "(beta)"}
        </li>
      );
    });
  };

  const renderDesignLinter = () => {
    switch (activeTab) {
      case "language":
        return <LanguageLinterPlugin />;
      case "color":
        return <ColorLinter />;
    }
  };

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
      {renderDesignLinter()}
    </>
  );
};

export default DesignLinter;
