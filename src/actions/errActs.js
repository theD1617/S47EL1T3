import axios from 'axios';
import {
    GET_ERRORS, CLEAR_ERRORS
    } from '../actions/types';

    export const returnErr = (msg, status, id= null) => {
        return {
            type: GET_ERRORS,
            payload: {msg, status, id}
        };
    };
    export const clearErr = () => {
        return {
            type: CLEAR_ERRORS
        };
    };
