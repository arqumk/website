import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import FavoritePersonalities from "./components/FavoritePersonalities/FavoritePersonalities";
import Footer from "./components/Footer";
import Cities from "./components/Cities/Cities";
import TouristSpots from "./components/TouristSpot/TouristSpots";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<FavoritePersonalities />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/tourist-spot" element={<TouristSpots />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
