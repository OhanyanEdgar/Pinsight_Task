


export const types = {
    EDIT_USER: "EDIT_USER",
}

export const editUser = user => {
    return {
        type: types.EDIT_USER,
        payload: user,
    };
};

