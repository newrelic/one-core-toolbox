import * as React from "react";
import "../styles/ui.css";

const Home = (props) => {
  const { setActivePlugin } = props;

  const PluginTile = (props) => {
    const { heading, description, onClick, pluginName } = props;

    const tileClasses = {
      tableCreator: "table-creator",
      themeSwitcher: "theme-switcher",
      designLinter: "design-linter",
    };

    return (
      <div
        className={`plugin-tile-container ${tileClasses[pluginName]}`}
        onClick={() => onClick()}
      >
        <div className="plugin-tile-icon" aria-hidden="true"></div>
        <div className="plugin-tile-copy">
          <h3 className="plugin-tile-heading">{heading}</h3>
          <p className="plugin-tile-description">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <PluginTile
        pluginName="tableCreator"
        heading="Table creator"
        description="Create One Core tables with your cell and column settings."
        onClick={() => setActivePlugin("table-creator")}
      />
      <PluginTile
        pluginName="themeSwitcher"
        heading="Theme switcher"
        description="A dark mode or light mode setting for your layers"
        onClick={() => setActivePlugin("theme-switcher")}
      />
      <PluginTile
        pluginName="designLinter"
        heading="Design linter"
        description="Checks your layers for color styles, and soon will check for language too."
        onClick={() => setActivePlugin("color-linter")}
      />

      <p className="home-support">
        Report a bug, share a feature idea, or get support at{" "}
        <strong>#help-one-core</strong>.
      </p>
    </div>
  );
};

export default Home;
