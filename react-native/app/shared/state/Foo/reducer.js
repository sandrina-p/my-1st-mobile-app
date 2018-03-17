import * as actionTypes from './actionTypes';

const initialState = {
    foo: 'Start Here'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_NEW_TEXT:
            return {
                ...state,
                foo: action.payload.text,
            };
        default:
            return state;
    }
};
