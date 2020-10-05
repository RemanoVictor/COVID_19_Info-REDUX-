import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap3/dist/css/bootstrap.min.css";

import Navigation from "./components/navigation";
import "./scss/styles.scss";

export default function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Navigation />
            </div>
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    </Provider>
  );
}

