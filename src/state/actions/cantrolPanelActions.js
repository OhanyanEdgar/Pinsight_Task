
export const types = {
    USER_PER_PAGE: "USER_PER_PAGE",
    DND_TOGLE: "DND_TOGLE",
};

export const setUsersPerPage = count => {
    return {
        type: types.USER_PER_PAGE,
        payload: count,
    };
};

export const setDnDtogle = bool => {
    return {
        type: types.DND_TOGLE,
        payload: bool,
    };
};

