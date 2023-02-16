import { DECREMENT, INCREMENT } from "./types";

export const increment = value => {
    return {
        type: INCREMENT,
        value,
    };
};

export const decrement = value => {
    return {
        type: DECREMENT,
        value,
    };
};

export const verifiedDecrement = value => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(decrement(value));
        }
    };
};
