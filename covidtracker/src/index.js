import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import covidApp from "./pages/home";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={covidApp} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
