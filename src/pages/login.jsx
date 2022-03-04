import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { loginAction, loginActionsThunk } from "../redux/actions";
import { FaEye } from "react-icons/fa";
import { Label, Alert, Spinner } from "reactstrap";
import axios from "axios";
import { API_URL } from "../helpers";

const RedirectAuth = ({ children }) => {
  const userData = useSelector((state) => state.userData);

  if (userData.isLogin) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

const Login = (props) => {
  // usenavagite untuk redirect
  const navigate = useNavigate();
  const [see, setsee] = useState(false);
  const [error, seterror] = useState({
    username: "",
    password: "",
    message: "",
  });
  const [input, setinput] = useState({
    username: "",
    password: "",
  });
  const [loading, setloading] = useState(false);

  const onInputChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    props.loginActionsThunk(input, navigate, seterror, setloading);
    // cara lain
    // MENGGUNAKAN NAVIGATE pada saat redirect dan mau melindungi sebuah page
    // setpetRedirect("/");
  };

  return (
    <RedirectAuth>
      <div className=" mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="rounded w-50 p-5 shadow-lg bg-white ">
          <h1>Login</h1>
          <form onSubmit={login}>
            <label>Username *</label>
            <input
              type="text"
              className="form-control mt-1 "
              placeholder="username"
              name="username"
              value={input.username}
              onChange={onInputChange}
            />
            {/* {error.username ? (
              <div className="text-danger">{error.username}</div>
            ) : null} */}
            {error.username && (
              <div className="text-danger">{error.username}</div>
            )}
            <label className="mt-1">Password *</label>
            <div className="d-flex mt-1 pass-container rounded">
              <input
                type={see ? "text" : "password"}
                name="password"
                className="password py-1 px-3 "
                placeholder="password"
                value={input.password}
                onChange={onInputChange}
              />
              <div className="p-2 icon-container">
                <FaEye
                  onClick={() => setsee(!see)}
                  size={25}
                  color={see ? "blue" : ""}
                />
              </div>
            </div>
            {error.password && (
              <div className="text-danger">{error.password}</div>
            )}
            {error.message && (
              <Alert color="danger mt-2">
                {error.message}
                <span
                  onClick={() => seterror({ ...error, message: "" })}
                  className="tunjuk float-end"
                >
                  X
                </span>
              </Alert>
            )}
            <div className="mt-2 float-end">
              {loading ? (
                <button disabled className="btn btn-primary">
                  <Spinner color="light" />
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              )}
            </div>
          </form>
          {/* <button className="btn btn-primary" onClick={login}>
            Login
          </button> */}
        </div>
      </div>
    </RedirectAuth>
  );
};

export default connect(null, { loginAction, loginActionsThunk })(Login);
