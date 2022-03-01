import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home";
import Resep from "./pages/resep";
import Login from "./pages/login";
import ResepDetail from "./pages/resepDetail";
import Topics from "./pages/topics";
import NotFound from "./pages/notfound";

function App() {
  let loc = useLocation();
  const navigate = useNavigate();
  let username = localStorage.getItem("username");
  // useLocation gunanya untuk mendapatkan data dimana user berada
  console.log(loc);

  const activeClassName = (path) => {
    return loc.pathname === path ? "active" : "";
  };

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div>
      <div className="p-3 d-flex text-white justify-content-center bg-primary">
        <Link to="/" className={`me-2 ${activeClassName("/")}`}>
          Home
        </Link>
        <Link to="/resep" className={"me-2 " + activeClassName("/resep")}>
          Resep
        </Link>
        {username ? (
          <div className="text-white me-2">Halo , {username}</div>
        ) : null}
        {username ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login" className={"me-2 " + activeClassName("/login")}>
            Login
          </Link>
        )}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resep" element={<Resep />} />
          <Route path="/resep/:id" element={<ResepDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Resep /> */}
        {/* <Home /> */}
      </div>
    </div>
  );
}

// export default hanya bisa diexport sekali pada satu file
export default App;
