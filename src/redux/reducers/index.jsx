import userReducers from "./userReducers";
import angkaReducers from "./angkaReducers";

import { combineReducers, createStore } from "redux";
import kataaReducers from "./kataReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
const reducers = combineReducers({
  angka: angkaReducers,
  userData: userReducers,
  kata: kataaReducers,
});
export const store = createStore(reducers, composeWithDevTools());
