import axios from 'axios';
import {
    GET_CLIENTS, GET_CLIENT, ADD_CLIENT,
    EDIT_CLIENT, DEL_CLIENT, CLIENTS_LOADING,
    LOG_CLIENT, REG_CLIENT, ACT_CLIENT,
    PIN_REC_CLIENT, NIK_REC_CLIENT,
    ACT_PREP_CLIENT, CLIENT_LOADING,
    CLIENT_LOADED, AUTH_ERROR, LOG_SUCCESS,
    LOG_FAIL, EXIT_SUCCESS, REG_SUCCESS,
    REG_FAIL
} from '../actions/types';
import { returnErr, clearErr } from './errActs';
const HOST = process.env.REACT_APP_API_HOST;

export const loadClient = () => (dispatch, getState) => {
    dispatch({
        type: CLIENT_LOADING,
        payload: getState().client
    });
    const token = getState().client.token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
    if (token) config.headers['auth-token'] = token;
    console.log(config);
    axios.get(`${HOST}/clients/auth`, config)
        .then(res => {
            dispatch({
                type: CLIENT_LOADED,
                payload: res.data
            });
            console.log(res);
        }).catch(err => {
            console.log(err.response.data, err.response.status);
            dispatch(returnErr(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        });
};

export const getClients = () => (dispatch, getState) => {
    console.log("GET_CLIENTS ACTION")
    dispatch(clientsLoading());
    const token = getState().client.token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
    config.headers['auth-token'] = token;
    console.log(config);
    axios.get(`${HOST}/clients/list`, config).then(res => dispatch({
        type: GET_CLIENTS,
        payload: res.data
    })).catch(err => {
        dispatch(returnErr(err.response.data, err.response.status));
    });
};

export const doLog = log => dispatch => {
    console.log("LOG_CLIENT ACTION" + log.nik);
    const config = { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", } };
    const body = JSON.stringify(log);
    axios.post(`${HOST}/clients/log`, body, config).then(res => {
        console.log("DONE LOG client => " + res.data.client._id + " token => " + res.data.token);
        dispatch({
            type: LOG_CLIENT,
            payload: res.data
        });

    }).catch(err => {
        dispatch(returnErr(err.response.data, err.response.status));

        dispatch({ type: LOG_FAIL });
    });

};
export const doReg = reg => dispatch => {
    const config = { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", } };
    const body = JSON.stringify(reg);
    axios.post(`${HOST}/clients/sign`, body, config)
        .then(res => dispatch({
            type: REG_SUCCESS,
            payload: res.data
        })
        ).catch(err => {
            dispatch(returnErr(err.response.data, err.response.status));
            dispatch({ type: REG_FAIL });
        });
    console.log(reg);

};
export const doPinRec = pRec => {

};
export const doNikRec = nRec => {

};
export const doAct = act => {

};
export const doPrep = prep => {

};
export const exit = () => dispatch => {
    dispatch({
        type: CLIENT_LOADED
    });
};

export const clientsLoading = () => {
    return {
        type: CLIENTS_LOADING
    }
};