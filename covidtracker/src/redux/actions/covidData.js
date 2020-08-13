import axios from "axios";

import { GET_COVID_DATA, GET_COVID_DATA_ERROR } from "./actionTypes";
import { COVID_API } from "../../constant";

export const CovidData = () => async (dispatch) => {
  try {
    const covidResults = await axios.get(COVID_API);

    dispatch({
      type: GET_COVID_DATA,
      payload: covidResults.data.data,
    });
    console.log(covidResults.data.data);
  } catch (error) {
    dispatch({
      type: GET_COVID_DATA_ERROR,
      payload: error,
    });
    console.log("computer says no");
  }
};
