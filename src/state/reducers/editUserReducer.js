


// Important
import { types } from "../actions/editUserActions";


const editUserReducer = (state = {}, action) => {
    switch(action.type){
      case types.EDIT_USER:
          return action.payload;
      default:
        return state;
    };
};

export default editUserReducer;