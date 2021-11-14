

export const types = {
    FILTER_CRITERION: "FILTER_CRITERION",
};

export const setFilterCriterion = criterion => {
    return {
        type: types.FILTER_CRITERION,
        payload: criterion,
    };
};

