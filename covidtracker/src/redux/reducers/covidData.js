import { GET_COVID_DATA } from "../actions/actionTypes";

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_COVID_DATA:
      return { ...state, covidData: payload };
    default:
      return state;
  }
}
