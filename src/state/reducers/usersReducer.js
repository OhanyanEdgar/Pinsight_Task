
// Important
import { types } from "../actions/usersActions";


const usersReducer = (state = [], action) => {
    switch(action.type){
      case types.DEL_USER:
        return state.filter(user => user.id !== action.payload);
      case types.ADD_USER:
        return [action.payload, ...state];
      case types.UPDATE_USER:
        return state.map(user => user.id === action.payload.id ? action.payload : user);
      case types.FILL_FAKE_DATA:
        return [...state, ...action.payload.map(user => ({...user, id: user.id + Date.now()}))];
      default:
        return state;
    };
};

export default usersReducer;