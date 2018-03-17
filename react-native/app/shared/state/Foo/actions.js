import { SUBMIT_NEW_TEXT } from './actionTypes';

export const submitNewText = (text) => ({
    type: SUBMIT_NEW_TEXT,
    payload: text,
});
