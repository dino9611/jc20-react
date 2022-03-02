import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutAction } from "../redux/actions";

const Header = (props) => {
  // let username = props.userData.username;
  // let isLogin = props.userData.isLogin;
  // ini sama diatas dan dibawah sama
  let { username, isLogin } = props.userData;
  let loc = useLocation();
  // useLocation gunanya untuk mendapatkan data dimana user berada
  let navigate = useNavigate();
  const activeClassName = (path) => {
    return loc.pathname === path ? "active" : "";
  };

  const logout = () => {
    props.logoutAction();
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
        Redux {props.jumlahKata}
      </Link>
      {isLogin ? (
        <div className="text-white me-2">Halo , {username}</div>
      ) : null}
      {isLogin ? (
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
    jumlahKata: state.kata.jumlah,
    userData: state.userData,
  };
};

export default connect(mapStateToProps, { logoutAction })(Header);
