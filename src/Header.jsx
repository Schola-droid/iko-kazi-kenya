import React from "react";
import NavBar from "./components/NavBar";

const Header = () => {
  return (
    <div id="header-container">
      <div id="header">
        <h1 style={{ fontSize: "2vw" }}>IKO KAZI KENYA</h1>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
