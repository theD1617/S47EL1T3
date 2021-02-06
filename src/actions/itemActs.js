import axios from 'axios';
import {GET_ITEMS, GET_ITEM, ADD_ITEM, EDIT_ITEM, DEL_ITEM, ITEMS_LOADING} from './types';

export const getItems = () => dispatch => {
    console.log("GET_ITEMS ACTION")
    dispatch(itemsLoading());
    axios.get('https://eli73.herokuapp.com/items').then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
    }))
};
export const itemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};