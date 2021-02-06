import {GET_CLIENTS, GET_CLIENT, ADD_CLIENT, EDIT_CLIENT, DEL_CLIENT, CLIENTS_LOADING} from '../actions/types';

const initialState = {
    clients:[],
    cl_loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CLIENTS :
            console.log("GET_ITEMS REDUCER")
            return {
                ...state,
                clients: action.payload,
                cl_loading: false
            }
        case CLIENTS_LOADING :
            return {
                ...state,
                cl_loading: true
            } 
        default:
            return state;
    }
}