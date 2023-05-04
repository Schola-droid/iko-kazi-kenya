import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header-container">
      <div id="header">
        <NavLink to='/' style={{ fontSize: "2vw" }}>IKO KAZI KENYA</NavLink >
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
