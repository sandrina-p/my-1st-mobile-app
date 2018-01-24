import * as actionTypes from './actionTypes';

const initialState = {
    mainText: 'Start Here'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_NEW_TEXT:
            return {
                ...state,
                mainText: action.payload.text,
            };
        default:
            return state;
    }
}
