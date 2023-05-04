import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import { InitialProvider } from "./components/JobContext";

function App() {
  return (
    <InitialProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </InitialProvider>
  );
}

export default App;
