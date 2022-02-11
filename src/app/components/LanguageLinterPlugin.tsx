import * as React from "react";
import { useState, useEffect } from "react";
import LanguageLinter, { lintMyText } from "new-relic-language-linter"
require("babel-polyfill");
import "../styles/ui.css";

declare function require(path: string): any;

const LanguageLinterPlugin = () => {
  const [selectedTextLayers, setSelectedTextLayers] = useState([]);
  const [textLayersWithSuggestions, setTextLayersWithSuggestions] = useState([]);
  const [sampleText, setSampleText] = useState('');
  const [sampleTextIndex, setSampleTextIndex] = useState(0);
  const [maxTextIndex, setMaxTextIndex] = useState(0);

  // Get the selected layer when the plugin loads
  // This is how we read messages sent from the plugin controller
  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: "request-selection" }, },"*");

    window.onmessage = async (event) => {
      const { type, message } = event.data.pluginMessage;

      console.log('selection-change was received');

      if (type === "selection-change" && message.selectedLayer.length > 0) {
        
        // reset the index of the sample text to 0
        setSampleTextIndex(0)

        // Filter out text layers that have no suggestions
        setSelectedTextLayers(message.textLayers)
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
    if (selectedTextLayers.length > 0) {
      getTextLayersWithSuggestions()
    }
  }, [selectedTextLayers])

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
      await Promise.resolve(lintMyText(item.characters)).then(result => report = result)
      return !!report.messages[0]?.message
    })

    setTextLayersWithSuggestions(layersWithSuggestions)
  }

  return(
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
        sampleText={sampleText}
        setSampleText={updateSourceText}
        updateTimer={100}
      />
    </div>
  );
};

export default LanguageLinterPlugin;
