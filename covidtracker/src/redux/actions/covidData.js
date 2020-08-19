import axios from "axios";

import { GET_COVID_DATA, GET_COVID_DATA_ERROR } from "./actionTypes";
import { COVID_API } from "../../constant";

export const CovidData = () => async (dispatch) => {
  try {
    const covidResults = await axios.get(
      // "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
      COVID_API
    );
    console.log("im being read" + covidResults);
    dispatch({
      type: GET_COVID_DATA,
      payload: covidResults,
    });
  } catch (error) {
    dispatch({
      type: GET_COVID_DATA_ERROR,
      payload: error,
    });
    console.log("computer says no");
  }
};
