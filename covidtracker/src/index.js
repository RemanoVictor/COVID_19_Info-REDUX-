import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import CountriesPage from "./pages/Countries";
import CountrySpecific from "./pages/CountrySpecific";
import covidApp from "./pages/Home";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={covidApp} />
        <Route path="/Countries" component={CountriesPage} />
        <Route
          path="/CountrySpecificCard/:CountryCode"
          exact
          component={CountrySpecific}
        />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
