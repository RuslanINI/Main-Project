import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/State";

let rerenderEntireTree = (State) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        AppData={State}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.State);

store.CallBackFunction(rerenderEntireTree);

// reportWebVitals();
