import * as React from "react";
import { useState, useEffect } from "react";
import LanguageLinter from "new-relic-language-linter"
import "../styles/ui.css";

declare function require(path: string): any;

const LanguageLinterPlugin = () => {
  const [selectedTextLayers, setSelectedTextLayers] = useState([]);
  const [sampleText, setSampleText] = useState('');
  const [sampleTextIndex, setSampleTextIndex] = useState(0);
  const [maxTextIndex, setMaxTextIndex] = useState(0);

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === "selection-change") {
        setSelectedTextLayers(message)
      }
    };
  }, []);

  React.useEffect(() => {
    if (selectedTextLayers.length > 0) {
      setSampleText(selectedTextLayers[0].characters)
      setMaxTextIndex(selectedTextLayers.length)
    }
  }, [selectedTextLayers]);

  const handleTextLayerNavigation = (direction) => {
    if (direction === "previous") {
      setSampleText(selectedTextLayers[sampleTextIndex - 1].characters);
      setSampleTextIndex(sampleTextIndex - 1)
    } else if (direction === "next") {
      setSampleText(selectedTextLayers[sampleTextIndex + 1].characters);
      setSampleTextIndex(sampleTextIndex + 1)
    }
  }


  const handleTextAreaOnChange = (event) => {
    setSampleText(event.target.value);
  };
  
  return(
    <>
      <nav className="text-layer-nav">
        <button
          className={"nav-arrow left-nav-arrow"}
          onClick={() => handleTextLayerNavigation("previous")}
          disabled={sampleTextIndex - 1 <= 0}
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
        setSampleText={setSampleText}
      />
    </>
  );
};

export default LanguageLinterPlugin;
