
// Important
import { types } from "../actions/filterActions";

const initialFilter = {
    bill: "all",
    name: ""
};

 export const filterReducer = (state = initialFilter, action) => {
    switch (action.type){
        case types.FILTER_CRITERION:
            return action.payload;
        default:
            return state;
    };
};
