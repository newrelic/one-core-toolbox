import * as React from "react";
import { useState, useEffect } from "react";
import LanguageLinter, { lintMyText } from "new-relic-language-linter"
require("babel-polyfill");
import "../styles/ui.css";
import IconChevronLeft from '../assets/icon-chevron-left.svg';

declare function require(path: string): any;

const LanguageLinterPlugin = (props) => {
  const { setActivePlugin } = props;

  const [activeTab] = useState('language');
  const [selectedTextLayers, setSelectedTextLayers] = useState([]);
  const [textLayersWithSuggestions, setTextLayersWithSuggestions] = useState([]);
  const [sampleText, setSampleText] = useState('');
  const [sampleTextIndex, setSampleTextIndex] = useState(0);
  const [maxTextIndex, setMaxTextIndex] = useState(0);
  const [localCustomDictionary, setLocalCustomDictionary] = useState([]);
  const [localCustomDictionaryInitialized, setLocalCustomDictionaryInitialized] = useState(false);

  // Get the selected layer when the plugin loads
  // This is how we read messages sent from the plugin controller
  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: "request-local-custom-dictionary" }, },"*");
    parent.postMessage({ pluginMessage: { type: "request-selection" }, },"*");

    window.onmessage = async (event) => {
      const { type, message } = event.data.pluginMessage;

      if (type === "selection-change") {
        // reset the index of the sample text to 0
        setSampleTextIndex(0)

        // Filter out text layers that have no suggestions
        setSelectedTextLayers(message.textLayers)
      } else if (type === 'local-custom-dictionary-retrieved') {
        console.log(`client storage is: ${JSON.stringify(message)}`)
        setLocalCustomDictionaryInitialized(true)
        setLocalCustomDictionary(message)
      }
    };

  }, []);

  // when `selectedTextLayers` is updated update the sample text
  useEffect(() => {
    if (textLayersWithSuggestions.length > 0) {
      setSampleText(textLayersWithSuggestions[0].characters)
      setMaxTextIndex(textLayersWithSuggestions.length)
    } else {
      setSampleText('')
      setMaxTextIndex(0)
    }
  }, [textLayersWithSuggestions]);

  // Every time the `sampleText` gets updated so that we can
  // scroll and zoom the active layer into the center of the screen
  useEffect(() => {
    if (sampleText !== '') {
      parent.postMessage(
        {
          pluginMessage: {
            type: "sample-text-changed",
            activeNodeId: textLayersWithSuggestions[sampleTextIndex].id,
          },
        },
        "*"
      );  
    }
  }, [sampleText])

  useEffect(() => {
    if (localCustomDictionaryInitialized && selectedTextLayers.length > 0) {
      getTextLayersWithSuggestions()
    } else if (localCustomDictionaryInitialized && selectedTextLayers.length === 0 ) {
      setSampleText('')
    } else {
      parent.postMessage({ pluginMessage: { type: "request-local-custom-dictionary" }, },"*");
    }
  }, [selectedTextLayers, localCustomDictionary])

  const updateSourceText = (updatedText) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "update-source-text",
          layerId: textLayersWithSuggestions[sampleTextIndex].id,
          updatedText: updatedText,
        },
      },
      "*"
    );

    setSampleText(updatedText)
  }

  const handleTextLayerNavigation = (direction) => {
    // Which direction does the user want to navigate?
    if (direction === "previous") {
      setSampleText(textLayersWithSuggestions[sampleTextIndex - 1].characters);
      setSampleTextIndex(sampleTextIndex - 1)
    } else if (direction === "next") {
      setSampleText(textLayersWithSuggestions[sampleTextIndex + 1].characters);
      setSampleTextIndex(sampleTextIndex + 1)
    }
  }

  const asyncFilter = async (arr, callback) => {
    const fail = Symbol()
    return (await Promise.all(arr.map(async item => (await callback(item)) ? item : fail))).filter(i=>i!==fail)
  }

  const getTextLayersWithSuggestions = async () => {
    const layersWithSuggestions = await asyncFilter(selectedTextLayers, async item => {
      let report: any = ''

      await Promise.resolve(lintMyText(item.characters, localCustomDictionary)).then(result => report = result)
      return !!report.messages[0]?.message
    })

    setTextLayersWithSuggestions(layersWithSuggestions)
  }

  // @ts-ignore
  const addToDictionary = (wordToAdd, suggestionId) => {
    debugger
    parent.postMessage({ 
      pluginMessage: { 
        type: "add-to-dictionary",
        wordToAdd: wordToAdd
      }, 
    },"*");
  }

  const provideSampleText = () => {
    const layerIsSelected = selectedTextLayers.length > 0
    const suggestionsAvailable = textLayersWithSuggestions.length > 0

    if (!layerIsSelected) {
      return ''
    } else if (layerIsSelected && !suggestionsAvailable) {
        // LanguageLinter will show a "no issue found" empty state
        // if their sampleText provided to it has no issues. Since
        // None of our layers have issues, we'll trigger that
        // empty state.
      return 'Hello, World'
    } else {
      return sampleText
    }
  }

  // Render the nav tabs in the plug UI
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
          // onClick={() => handleNavigationTabClick(tab)}
          key={index}
        >
          {tabLabel}
        </li>
      );
    });
  };

  return(
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
      <div className="language-linter-container">
        <nav className="text-layer-nav">
          <button
            className={"nav-arrow left-nav-arrow"}
            onClick={() => handleTextLayerNavigation("previous")}
            disabled={sampleTextIndex - 1 < 0}
          ></button>

          {/*<div className="select-input-container">
            <select
              name="column-selection"
              className="column-selection-dropdown"
              onChange={() => setActiveColConfigurationScreen(parseInt(event.target.value) - 1)}
              value={activeColConfigurationScreen + 1}
            >
              {[...Array(activeCol).keys()].map((index) => {
                return (
                  <option key={index} value={index + 1} className="column-selection-dropdown-option">{`Column ${
                    index + 1
                  }`}</option>
                );
              })}
            </select>
          </div>*/}

          <button
            className={"nav-arrow right-nav-arrow"}
            onClick={() => handleTextLayerNavigation("next")}
            disabled={sampleTextIndex + 1 >= maxTextIndex}
          ></button>
        </nav>
        <LanguageLinter 
          // LanguageLinter will show a "no issue found" empty state
          // if their sampleText provided to it has no issues. Since
          // None of our layers have issues, we'll trigger that
          // empty state.
          sampleText={provideSampleText()}
          setSampleText={updateSourceText}
          updateTimer={100}
          customDictionary={localCustomDictionary}
          addToDictionary={addToDictionary}
        />
      </div>
    </>
  );
};

export default LanguageLinterPlugin;
