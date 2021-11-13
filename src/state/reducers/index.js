
// Important
import { combineReducers } from "redux";
// Reducers
import usersReducer from "./usersReducer";
import editUserReducer from "./editUserReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    editUser: editUserReducer,
})

export default rootReducer;