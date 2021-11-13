
// Important
import { types } from "../actions/editUserActions";


export const editUserReducer = (state = {}, action) => {
    switch(action.type){
      case types.EDIT_USER:
          return action.payload;
      default:
        return state;
    };
};
