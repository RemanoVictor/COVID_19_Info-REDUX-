import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

// import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

export default function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <div> Hello World </div>
        <div>{props.children}</div>
      </div>
    </Provider>
  );
}
