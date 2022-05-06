import * as React from "react";
import "../styles/ui.css";
import IconTableCreator from "../assets/icon-table-creator.svg";
import IconDesignLinter from "../assets/icon-design-linter.svg";
import IconThemeSwitcher from "../assets/icon-theme-switcher.svg";

const Home = (props) => {
  const { setActivePlugin } = props;

  const PluginTile = (props) => {
    const { heading, description, onClick, icon } = props;

    return (
      <div className="plugin-tile-container" onClick={() => onClick()}>
        <img src={icon} alt={`${heading} icon`} />
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
        heading="Table creator"
        description="Create One Core tables with your cell and column settings."
        icon={IconTableCreator}
        onClick={() => setActivePlugin("table-creator")}
      />
      <PluginTile
        heading="Theme switcher"
        description="A dark mode or light mode setting for your layers"
        icon={IconThemeSwitcher}
        onClick={() => setActivePlugin("theme-switcher")}
      />
      <PluginTile
        heading="Design linter"
        description="Checks your layers for color styles, and soon will check for language too."
        icon={IconDesignLinter}
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
