import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

function App() {
  const [children] = props;
  return (
    <Provider store={store}>
      <div className="App">
        <div>{children}</div>
      </div>
    </Provider>
  );
}

export default App;
