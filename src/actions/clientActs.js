import axios from 'axios';
import {GET_CLIENTS, GET_CLIENT, ADD_CLIENT, EDIT_CLIENT, DEL_CLIENT, CLIENTS_LOADING} from '../actions/types';

export const getClients = () => dispatch => {
    console.log("GET_CLIENTS ACTION")
    dispatch(itemsLoading());
    axios.get('https://eli73.herokuapp.com/clients/list').then(res => dispatch({
        type: GET_CLIENTS,
        payload: res.data
    }))
};
export const itemsLoading = () => {
    return {
        type: CLIENTS_LOADING
    }
};