import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { PluginContext } from "./PluginContext";
import "../styles/ui.css";
import IconChevronLeft from "../assets/icon-chevron-left.svg";
import LightModeThumbnail from "../assets/light-mode-thumbnail.svg";
import DarkModeThumbnail from "../assets/dark-mode-thumbnail.svg";

declare function require(path: string): any;

interface props {
  setActivePlugin: (tab: string) => void;
}

const ThemeSwitcher = (props: props) => {
  const { state } = useContext(PluginContext);
  const { currentSelection, loadingLightSwitch, loadingDarkSwitch } = state;
  const [localLoadingLightSwitch, setLocalLoadingLightSwitch] = useState(false);
  const [localLoadingDarkSwitch, setLocalLoadingDarkSwitch] = useState(false);

  const { setActivePlugin } = props;
  const lightModeRadioOption = useRef(null);
  const darkModeRadioOption = useRef(null);

  useEffect(() => {
    if (currentSelection?.length > []) {
      lightModeRadioOption.current.checked = false;
      darkModeRadioOption.current.checked = false;
    }
  }, [currentSelection]);

  useEffect(() => {
    loadingLightSwitch === false && setLocalLoadingLightSwitch(false);
  }, [loadingLightSwitch]);

  useEffect(() => {
    loadingDarkSwitch === false && setLocalLoadingDarkSwitch(false);
  }, [loadingDarkSwitch]);

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
    setLocalLoadingDarkSwitch(true);
    parent.postMessage(
      { pluginMessage: { type: "theme-switcher-to-dark" } },
      "*"
    );
  };

  const setLightTheme = () => {
    setLocalLoadingLightSwitch(true);
    parent.postMessage(
      { pluginMessage: { type: "theme-switcher-to-light" } },
      "*"
    );
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
      <main className="theme-switcher-container">
        <h4 className="theme-switcher-heading">Choose a theme</h4>
        <p className="theme-switcher-description">
          Select some layers, then chose a theme below.
        </p>
        <form className="theme-selection-container">
          <div className="theme-selection-option">
            <input
              type="radio"
              className="theme-selection-input"
              id="light-mode-checkbox"
              name="theme-choice"
              ref={lightModeRadioOption}
            />
            <label
              htmlFor="light-mode-checkbox"
              className="theme-selection-input-label"
              onClick={() => setLightTheme()}
            >
              <img
                src={LightModeThumbnail}
                alt="Thumbnail of light screen example"
                className="theme-selection-thumbnail-image"
              />
              <span className="theme-selection-label-text">Light mode</span>

              {localLoadingLightSwitch && (
                <div className="theme-switcher-loader"></div>
              )}
            </label>
          </div>
          <div className="theme-selection-option">
            <input
              type="radio"
              className="theme-selection-input"
              id="dark-mode-checkbox"
              name="theme-choice"
              ref={darkModeRadioOption}
            />
            <label
              htmlFor="dark-mode-checkbox"
              className="theme-selection-input-label"
              onClick={() => setDarkTheme()}
            >
              <img
                src={DarkModeThumbnail}
                alt="Thumbnail of dark screen example"
                className="theme-selection-thumbnail-image"
              />
              <span className="theme-selection-label-text">Dark mode</span>

              {localLoadingDarkSwitch && (
                <div className="theme-switcher-loader"></div>
              )}
            </label>
          </div>
        </form>
      </main>
    </>
  );
};

export default ThemeSwitcher;
