
export const types = {
    COUNT_USERS: "COUNT_USERS",
};

// counterProp is an object that contains all users & 
export const countUsers = users => {
    return {
        type: types.COUNT_USERS,
        payload: users,
    }
}