import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const RedirectAuth = ({ children }) => {
  const [pathRedirect, setpetRedirect] = useState("");
  useEffect(() => {
    let username = localStorage.getItem("username");
    if (username) {
      setpetRedirect("/");
    }
  }, []);

  if (pathRedirect) {
    return <Navigate to={pathRedirect} replace />;
  }

  return children;
};

const Login = () => {
  // usenavagite untuk redirect
  const navigate = useNavigate();

  const login = () => {
    //   redirect
    localStorage.setItem("username", "dino");
    navigate("/", { replace: true });
    // cara lain
    // MENGGUNAKAN NAVIGATE pada saat redirect dan mau melindungi sebuah page
    // setpetRedirect("/");
  };

  return (
    <RedirectAuth>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1>INI LOGIN</h1>
        <div>
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </RedirectAuth>
  );
};

export default Login;
