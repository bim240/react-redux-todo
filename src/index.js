import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";
import "./assets/stylesheets/style.css";
store.subscribe(() =>
  localStorage.setItem("state", JSON.stringify(store.getState()))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
