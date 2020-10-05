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

// Will try and have one reducer for entire application below. Still to be tested

// import { GET_GLOBAL_DATA } from "../actions/actionTypes";

// const initialState = {
//   global: [],
//   coutries: [],
// };

// export default function (state = initialState, { type, payload }) {
//   switch (type) {
//     case GET_GLOBAL_DATA:
//       return {
//         ...state,
//         globalData: payload.global,
//         countryData: payload.countries,
//       };
//     default:
//       return state;
//   }
// }
