import { Store } from "../store";
import { combineReducers } from "redux";
import counter from "./counter";

export const reducers = combineReducers<Store.All>({
  counter,
});
