import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Resep from "./pages/resep";
import Login from "./pages/login";
import ResepDetail from "./pages/resepDetail";
import Topics from "./pages/topics";
import NotFound from "./pages/notfound";
import Header from "./components/header";
import Redux from "./pages/redux";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // componentDidMount
  useEffect(() => {
    let username = localStorage.getItem("username");
    if (username) {
      let data = { username };
      dispatch({ type: "LOGIN", payload: data });
    }
  }, []);

  return (
    <div className="">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resep" element={<Resep />} />
          <Route path="/resep/:id" element={<ResepDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/redux" element={<Redux />} />
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
