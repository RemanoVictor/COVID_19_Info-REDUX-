import { GET_COUNTRY_DATA } from "../actions/actionTypes";

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRY_DATA:
      return { ...state, countryData: payload };
    default:
      return state;
  }
}
