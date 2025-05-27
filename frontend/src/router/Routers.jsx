import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import SearchResultList from "./../pages/SearchResultList";
import About from "./../pages/About";
import Roteiros from "./../pages/Roteiros";

const Routers = () => {
  return (
    <Routes>
      {/* Render Home component at the root path */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path="/roteiros" element={<Roteiros />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default Routers;

