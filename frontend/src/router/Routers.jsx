import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import SearchResultList from "./../pages/SearchResultList";

const Routers = () => {
  return (
    <Routes>
      {/* Render Home component at the root path */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default Routers;

