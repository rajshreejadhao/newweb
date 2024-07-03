

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";


const siteProps = {
  name: "Rajshree Jadhao",
  title: "Computer Science Students ",
  email: "rajshree.jadhao1512@gmail.com",
  gitHub: "rajshreejadhao",
  instagram: "_raji_jadhao",
  linkedIn: "rajshree-jadhao15",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
