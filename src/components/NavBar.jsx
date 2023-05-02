import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav id="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/jobs">JOBS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </nav>
    </>
  );
};

export default NavBar;