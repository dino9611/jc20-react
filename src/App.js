import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Resep from "./pages/resep";

function App() {
  let loc = useLocation();
  // useLocation gunanya untuk mendapatkan data dimana user berada
  console.log(loc);

  const activeClassName = (path) => {
    return loc.pathname === path ? "active" : "";
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-center bg-primary">
        <Link to="/" className={`me-2 ${activeClassName("/")}`}>
          Home
        </Link>
        <Link to="/resep" className={"me-2 " + activeClassName("/resep")}>
          Resep
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resep" element={<Resep />} />
        </Routes>
        {/* <Resep /> */}
        {/* <Home /> */}
      </div>
    </div>
  );
}

// export default hanya bisa diexport sekali pada satu file
export default App;
