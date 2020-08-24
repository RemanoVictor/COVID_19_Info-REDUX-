import { combineReducers } from "redux";

import globalData from "./globalData";

const rootReducer = combineReducers({
  globalData: globalData,
});

export default rootReducer;
