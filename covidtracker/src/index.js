import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import CountriesPage from "./pages/Countries";
import covidApp from "./pages/Home";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={covidApp} />
        <Route path="/Countries" component={CountriesPage} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
