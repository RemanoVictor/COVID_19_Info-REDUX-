import { combineReducers } from "redux";

import globalData from "./globalData";
import countryData from "./countryData";

const rootReducer = combineReducers({
  globalData: globalData,
  countryData: countryData,
});

export default rootReducer;
