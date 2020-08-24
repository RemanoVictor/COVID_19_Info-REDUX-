import { GET_GLOBAL_DATA } from "../actions/actionTypes";

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_GLOBAL_DATA:
      return { ...state, globalData: payload };
    default:
      return state;
  }
}
