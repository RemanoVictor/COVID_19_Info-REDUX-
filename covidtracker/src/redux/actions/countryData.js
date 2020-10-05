import axios from "axios";

import { GET_COUNTRY_DATA, GET_COUNTRY_DATA_ERROR } from "./actionTypes";
import { GLOBAL_API } from "../../constant";

export const CountryData = () => async (dispatch) => {
  try {
    const countryResults = await axios.get(GLOBAL_API);

    dispatch({
      type: GET_COUNTRY_DATA,
      payload: countryResults.data.Countries,
    });
  } catch (error) {
    dispatch({
      type: GET_COUNTRY_DATA_ERROR,
      payload: error,
    });
    console.log("unable to retrieve data");
  }
};
