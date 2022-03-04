import userReducers from "./userReducers";
import angkaReducers from "./angkaReducers";

import { combineReducers, createStore, applyMiddleware } from "redux";
import kataaReducers from "./kataReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
const reducers = combineReducers({
  angka: angkaReducers,
  userData: userReducers,
  kata: kataaReducers,
});

let middlewares = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
