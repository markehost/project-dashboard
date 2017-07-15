import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Counter } from "./components/counter";
import { Provider } from "react-redux";

import {
  reducers,
} from "./reducers";

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}
const store = Redux.createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  if (rootEl) {
    ReactDOM.render(
        <Provider store={store}>
          <Counter label="a counter" />
        </ Provider>, rootEl);
  }
});
