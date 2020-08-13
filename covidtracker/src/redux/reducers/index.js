import { combineReducers } from "redux";

import covidData from "./covidData";

const rootReducer = combineReducers({
  covidData: covidData,
});

export default rootReducer;
