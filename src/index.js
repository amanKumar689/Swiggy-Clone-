import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SwiggyApp from "./SwiggyApp";
import "./style/global.css";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
const STORE = createStore(rootReducer, composeWithDevTools());
ReactDom.render(
  <Provider store={STORE}>
    <Router>
     <SwiggyApp />
    </Router>
  </Provider>,
  document.getElementById("root")
);
