import axios from 'axios';
import { GET_ITEMS, GET_ITEM, ADD_ITEM, EDIT_ITEM, DEL_ITEM, ITEMS_LOADING } from './types';
const HOST = process.env.REACT_APP_API_HOST;

export const getItems = () => dispatch => {
    console.log("GET_ITEMS ACTION");
    dispatch(itemsLoading());
    axios.get(`${HOST}/items`).then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
    })).catch(err => {
        console.log(err);
    });
};

export const getItemQ = () => dispatch => {

};

export const itemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};
