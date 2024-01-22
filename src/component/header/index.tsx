import React from "react";
import "./index.css"
import {Navigation} from "./navigation";

export const Header: React.FC = () => {
  return (
    <header className="navigation-area" id="navigation-area-header">
      <Navigation/>
    </header>
  );
}
