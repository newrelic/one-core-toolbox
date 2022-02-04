import * as React from "react";
import { useState, useEffect } from "react";
import LanguageLinter from "new-relic-language-linter"
import "../styles/ui.css";

declare function require(path: string): any;

const LanguageLinterPlugin = () => {
  const [selectedLayers, setSelectedLayers] = useState([]);
  const [sampleText, setSampleText] = useState('');
  const [sampleTextIndex, setSampleTextIndex] = useState(0);
  const [maxTextIndex, setMaxTextIndex] = useState(0);

  // Get the selected layer when the plugin loads
  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    parent.postMessage({ pluginMessage: { type: "request-selection" }, },"*");

    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === "selection-change") {
        setSelectedLayers(message)
      }
    };
  }, []);

  // when `selectedLayers` is updated update the sample text
  useEffect(() => {
    if (selectedLayers.length > 0) {
      setSampleText(selectedLayers[0].characters)
      setMaxTextIndex(selectedLayers.length)
    } else {
      setSampleText('')
      setMaxTextIndex(0)
    }
  }, [selectedLayers]);

  // Every time the `sampleText` gets updated so that we can
  // scroll and zoom the active layer into the center of the screen
  useEffect(() => {
    if (sampleText !== '') {
      parent.postMessage(
        {
          pluginMessage: {
            type: "sample-text-changed",
            activeNodeId: selectedLayers[sampleTextIndex].id,
          },
        },
        "*"
      );  
    }
  }, [sampleText])

  const updateSourceText = (updatedText) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "update-source-text",
          layerId: selectedLayers[sampleTextIndex].id,
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
      setSampleText(selectedLayers[sampleTextIndex - 1].characters);
      setSampleTextIndex(sampleTextIndex - 1)
    } else if (direction === "next") {
      setSampleText(selectedLayers[sampleTextIndex + 1].characters);
      setSampleTextIndex(sampleTextIndex + 1)
    }
  }

  const handleTextAreaOnChange = (event) => {
    setSampleText(event.target.value);
  };
  
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
      />
    </div>
  );
};

export default LanguageLinterPlugin;
