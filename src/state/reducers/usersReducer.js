
// Important
import { types } from "../actions/usersActions";


const usersReducer = (state = [], action) => {
    switch(action.type){
      case types.DEL_USER:
        return state.filter(user => user.id !== action.payload);
      case types.ADD_USER:
        return [...state, action.payload];
      default:
          return state;
    };
};

export default usersReducer;