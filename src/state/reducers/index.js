
// Important
import { combineReducers } from "redux";
// Reducers
import usersReducer from "./usersReducer";
import editUserReducer from "./editUserReducer";
import { filterReducer } from "./filterReducers";

const rootReducer = combineReducers({
    users: usersReducer,
    editUser: editUserReducer,
    filter: filterReducer,
})

export default rootReducer;