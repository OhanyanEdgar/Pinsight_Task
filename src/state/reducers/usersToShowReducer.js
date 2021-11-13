// Important
import { types } from "../actions/usersToShowActions";


export const usersToShowReducer = (state = [], action) => {
    switch(action.type){
        case types.SET_USERS_TO_SHOW:
            return action.payload;
        default:
            return state;
    };
};
