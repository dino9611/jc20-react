import axios from "axios";
import { API_URL } from "../../helpers";

export const loginAction = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

export const loginActionsThunk = (input, navigate, seterror, setloading) => {
  return (dispatch) => {
    setloading(true);
    //   redirect
    // anggep sudah berhasil dan data dari backend
    let errors = { username: "", password: "", message: "" };
    if (!input.username) {
      errors.username = "isi dulu boy";
    }
    if (!input.password) {
      errors.password = "isi pass dulu boy";
    }
    if (input.username && input.password) {
      let { username, password } = input;
      axios
        .get(`${API_URL}/users?username=${username}&password=${password}`)
        .then((res) => {
          // res.data udah pasti array
          if (res.data.length) {
            // kalo berhasil
            dispatch({
              type: "LOGIN",
              payload: res.data[0],
            });
            localStorage.setItem("username", res.data[0].username);
            seterror({ username: "", password: "", message: "" });
            navigate("/", { replace: true });
            setloading(false);
          } else {
            throw { message: "user tidak ditemukan" };
          }
        })
        .catch((err) => {
          // err.response.data biasanya
          // tetapi karenaa thrownya di forntedn jadi sedikit berbeda
          if (err.response) {
            errors.message = err.response.data.message;
          } else {
            errors.message = err.message;
          }
          seterror({ ...errors });
          setloading(false);
        });
    } else {
      seterror({ ...errors });
      setloading(false);
    }
  };
};
