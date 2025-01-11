import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
};

export default App;
