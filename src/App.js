import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from './components/Contact';
import Templates from "./components/templates";

const App = () => {
  return (
    <div className="h-full">
      <Header />
      <Hero />
      <Services />
      <Templates />
      <Contact />
    </div>
  );
};

export default App;
