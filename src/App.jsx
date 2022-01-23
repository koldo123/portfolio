import React from "react";
import Contact from "./components/Contact";
import Header from "./components/header/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
