
// Important
import { types } from "../actions/filterActions";

export const filterReducer = (state = "", action) => {
    switch (action.type){
        case types.FILTER_CRITERION:
            return action.payload;
        default:
            return state;
    }
}