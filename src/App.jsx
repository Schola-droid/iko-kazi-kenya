import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

import { Route, Routes } from "react-router";
import Header from "./Header";
import Jobs from "./components/Jobs";
import { InitialProvider } from "./components/JobContext";
import ContactDetails from './components/ContactDetails';

function App() {
  return (
    <InitialProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact-details" element={<ContactDetails />} />
      </Routes>
    </InitialProvider>
  );
}

export default App;
