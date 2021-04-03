import { GET_CHART_INFO } from "../types";
import initialState from './initialState';


const chartInfoReducer = (state=initialState, action) => {
    const {type,payload}= action;
    if (type === GET_CHART_INFO) {
        return{
            ...state,
            chartInfo: payload
        };
    } else {
        return state
    }
}

export default chartInfoReducer;