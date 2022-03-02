import userReducers from "./userReducers";
import angkaReducers from "./angkaReducers";
import { combineReducers, createStore } from "redux";
const reducers = combineReducers({
  angka: angkaReducers,
  userData: userReducers,
});

export const store = createStore(reducers);
