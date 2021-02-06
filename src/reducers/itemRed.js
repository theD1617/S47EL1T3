import {GET_ITEMS, GET_ITEM, ADD_ITEM, EDIT_ITEM, DEL_ITEM, ITEMS_LOADING} from '../actions/types';

const initialState = {
    items: [ ],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS :
            console.log("GET_ITEMS REDUCER")
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case ITEMS_LOADING :
            return {
                ...state,
                loading: true
            } 
        default:
            return state;
    }
}