
// Important
import { combineReducers } from "redux";
// Reducers
import usersReducer from "./usersReducer";
import { editUserReducer } from "./editUserReducer";
import { filterReducer } from "./filterReducer";
import { userCountReducer } from "./usersCountReducer";
import { usersToShowReducer } from "./usersToShowReducer";
import { controlPanelReducer } from "./controlPanelReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    editUser: editUserReducer,
    filter: filterReducer,
    counter: userCountReducer,
    usersToShow: usersToShowReducer,
    controlPanel: controlPanelReducer,
});

export default rootReducer;