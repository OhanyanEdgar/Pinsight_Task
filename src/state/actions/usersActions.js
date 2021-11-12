

export const types = {
    DEL_USER: "DEL_USER",
    ADD_USER: "ADD_USER",
}

export const delUser = userId => {
    return {
        type: types.DEL_USER,
        payload: userId,
    };
};

export const addUser = user => {
    return {
        type: types.ADD_USER,
        payload: user,
    };
};