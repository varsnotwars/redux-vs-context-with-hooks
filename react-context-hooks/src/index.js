import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { GlobalContext } from "./global";
const { Provider } = GlobalContext;

ReactDOM.render(
  <Provider value={{ greeting: "hello world" }}>
    <App />
  </Provider>,
  document.getElementById("root")
);
