import React from "react";
import "./App.css";
import Event from "./Components/Event";

// import Team from "./Components/Team";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

import Logo from "./Components/Logo";
import Build from "./Components/Builder";
import Backer from "./Components/Backer";
import Team from "./Components/Team";
import Tokennomic from "./Components/Tokenomic";
import Frame from "./Components/Frame";

function App() {
  return (
    <div className="App">
      <Event />
      <Navbar />
      <Hero />
      <Logo />
      <Build />
      <Backer />
      <Team />
      <Tokennomic />
      <Frame />
      <Footer />
    </div>
  );
}

export default App;
