import { combineReducers, createStore, applyMiddleware } from "redux";
import promisemiddleware from "redux-promise-middleware";
import userReducer from "./src/Ducks/userReducer";

const store = createStore(
  combineReducers({ userReducer }),
  applyMiddleware(promisemiddleware())
);
export default store;
