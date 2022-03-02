import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { loginAction } from "../redux/actions";
import { FaEye } from "react-icons/fa";
import { Label, Alert } from "reactstrap";

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
  });
  const [input, setinput] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    //   redirect
    // anggep sudah berhasil dan data dari backend
    let errors = { username: "", password: "" };
    if (!input.username) {
      errors.username = "isi dulu boy";
    }
    if (!input.password) {
      errors.password = "isi pass dulu boy";
    }
    if (input.username && input.password) {
      let data = input;
      props.loginAction(data);
      localStorage.setItem("username", input.username);
      seterror({ username: "", password: "" });
      navigate("/", { replace: true });
    } else {
      seterror({ ...errors });
    }
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
            <div className="mt-2 float-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
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

export default connect(null, { loginAction })(Login);
