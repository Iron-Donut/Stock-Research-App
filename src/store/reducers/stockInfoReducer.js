import * as types from "../types";
import initialState from "./initialState";

const stockInfoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CHART_INFO:
      return {
        ...state,
        chartInfo: payload,
      };
    case types.GET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: payload
      }
    default:
      return state;
  }
};

export default stockInfoReducer;
