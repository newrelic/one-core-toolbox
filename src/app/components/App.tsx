import * as React from "react";
import { useState, useEffect } from "react";
import TableCreator from "./TableCreator";
import "../styles/ui.css";

declare function require(path: string): any;

const App = ({}) => {
  return (
    <>
      <nav className="tab-navigation">
        <ul className="tab-navigation-tabs">
          <li className="tab-navigation-tab active">Table creator</li>
          <li className="tab-navigation-tab">Language linter</li>
          <li className="tab-navigation-tab">More soon...</li>
        </ul>
      </nav>
      <TableCreator />
    </>
  );
};

export default App;
