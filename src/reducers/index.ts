import { Store } from "../store";
import { combineReducers } from "redux";
import counter from "./counter";

// NEW
import dataGrid from "./dataGrid";
import filters from "./filters";

export const reducers = combineReducers<Store.All>({
  counter,

  // NEW
  dataGrid,
  filters,
});
