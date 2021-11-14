
// Assets
import fakeData from "../../assets/fakeData";

export const types = {
    DEL_USER: "DEL_USER",
    ADD_USER: "ADD_USER",
    UPDATE_USER: "UPDATE_USER",
    FILL_FAKE_DATA: "FILL_FAKE_DATA",
};

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

export const updateUser = user => {
    return {
        type: types.UPDATE_USER,
        payload: user,
    };
};

export const fillFakeData = () => {
    return {
        type: types.FILL_FAKE_DATA,
        payload: fakeData,
    };
};