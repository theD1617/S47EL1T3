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
    import {returnErr} from './errActs';

export const loadClient = () => (dispatch, getState) => {
    dispatch({type: CLIENT_LOADING});
    const token = getState().client.token;
    const config = {headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}};
    config.headers['auth-token'] = token;
    axios.get(`https://eli73.herokuapp.com/clients/list`,config)
    .then(res => dispatch({
        type: CLIENT_LOADED,
        payload: res.data
    })).catch(err => {
        dispatch(returnErr(err.res.data, err.res.status));
        dispatch({ type: AUTH_ERROR})
    });
};

export const getClients = () => dispatch => {
    console.log("GET_CLIENTS ACTION");
    dispatch(itemsLoading());
    axios.get('https://eli73.herokuapp.com/clients/list').then(res => dispatch({
        type: GET_CLIENTS,
        payload: res.data
    }));
};
export const doLog = log => dispatch => {
    console.log("LOG_CLIENT ACTION");
    const config = {headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "foo": "ya"}};
    const body = JSON.stringify(log);
    axios.post('https://eli73.herokuapp.com/clients/log',body, config).then(res => dispatch({
        type: LOG_CLIENT,
        payload: res.data
    })).catch(err => {
        dispatch(returnErr(err.response.data, err.response.status));
        dispatch({ type: REG_FAIL});
    });

};
export const doReg = reg => dispatch => {
    const config = {headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "foo": "ya"}};
    const body = JSON.stringify(reg);
    axios.post('https://eli73.herokuapp.com/clients/sign',body, config)
    .then(res => dispatch({
        type: REG_SUCCESS,
        payload:res.data
    }));
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

export const itemsLoading = () => {
    return {
        type: CLIENTS_LOADING
    }
};