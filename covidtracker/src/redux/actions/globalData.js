import axios from "axios";

import { GET_GLOBAL_DATA, GET_DATA_ERROR } from "./actionTypes";
import { GLOBAL_API } from "../../constant";

export const CovidData = () => async (dispatch) => {
  try {
    const covidResults = await axios.get(GLOBAL_API);

    dispatch({
      type: GET_GLOBAL_DATA,
      payload: covidResults.data.Global,
    });
  } catch (error) {
    dispatch({
      type: GET_DATA_ERROR,
      payload: error,
    });
    console.log("computer says no");
  }
};
