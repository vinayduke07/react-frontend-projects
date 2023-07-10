import React from "react";
import "./App.css";
import Navigation from "./components/Nav-bar/Navigation";
import HeroSection from "./components/Hero-part/HeroSection";

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
