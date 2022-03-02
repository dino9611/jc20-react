import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = (props) => {
  let username = localStorage.getItem("username");
  let loc = useLocation();
  // useLocation gunanya untuk mendapatkan data dimana user berada
  let navigate = useNavigate();
  const activeClassName = (path) => {
    return loc.pathname === path ? "active" : "";
  };

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="p-3 d-flex text-white justify-content-center bg-primary">
      <Link to="/" className={`me-2 ${activeClassName("/")}`}>
        Home
      </Link>
      <Link to="/resep" className={"me-2 " + activeClassName("/resep")}>
        Resep
      </Link>
      <Link to="/redux" className={"me-2 " + activeClassName("/redux")}>
        Redux {props.bebas}
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
  );
};

const mapStateToProps = (state) => {
  return {
    bebas: state.angka.value,
  };
};

export default connect(mapStateToProps)(Header);
