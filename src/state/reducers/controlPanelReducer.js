
// Important
import { types } from "../actions/cantrolPanelActions";

const initialPanel = {
    usersPerPage: 5,
    dNdTogle: false,
};

 export const controlPanelReducer = (state = initialPanel, action) => {
    switch (action.type){
        case types.USER_PER_PAGE:
            return {
                ...state,
                usersPerPage: parseInt(action.payload),
            };
        case types.DND_TOGLE:
            return  {
                ...state,
                dNdTogle: action.payload,
            };
        default:
            return state;
    };
};
