
export const types = {
    SET_USERS_TO_SHOW: "SET_USERS_TO_SHOW",
};

export const setUsersToShow = users => {
    return {
        type: types.SET_USERS_TO_SHOW,
        payload: users,
    };
};