
export const types = {
    COUNT_USERS: "COUNT_USERS",
};

export const countUsers = users => {
    return {
        type: types.COUNT_USERS,
        payload: users,
    }
}