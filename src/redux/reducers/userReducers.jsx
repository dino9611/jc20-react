const INITIAL_STATE = {
  username: "",
  password: "",
  isLogin: false,
  id: 0,
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      //... untuk mengubah isi object, object state
      //  return {...state,isLogin:true,username:action.payload.username}
      return { ...state, isLogin: true, ...action.payload };
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducers;
