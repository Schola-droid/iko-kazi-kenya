import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";


import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import { InitialProvider } from "./components/JobContext";
import Contacts from "./components/Contacts";

function App() {
  return (
    <InitialProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contacts" element={<Contacts />} />
     
      </Routes>
    </InitialProvider>
  );
}

export default App;
