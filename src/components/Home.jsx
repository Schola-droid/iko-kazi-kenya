import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <h3 id="home-msg">
        Welcome to our job posting website! We aim to connect talented
        individuals with great job opportunities. Browse our listings and find
        your dream job today.
      </h3>
      <NavLink to="/jobs" id="home-jobs">JOBS</NavLink>
    </div>
  );
};

export default Home;
