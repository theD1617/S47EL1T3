import {
    GET_CLIENTS, GET_CLIENT, ADD_CLIENT,
    EDIT_CLIENT, DEL_CLIENT, CLIENTS_LOADING,
    LOG_CLIENT, REG_CLIENT, ACT_CLIENT,
    PIN_REC_CLIENT, NIK_REC_CLIENT,
    ACT_PREP_CLIENT, CLIENT_LOADING,
    CLIENT_LOADED,
    LOG_SUCCESS,
    REG_SUCCESS,
    LOG_FAIL,
    REG_FAIL,
    EXIT_SUCCESS,
    AUTH_ERROR
} from '../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    cl_auth: null,
    cl_loading: false,
    isLogged: false,
    client: null,
    role: null,
    clients: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CLIENT_LOADING:
            return {
                ...state,
                cl_loading: true,

            };
        case CLIENT_LOADED:
            return {
                ...state,
                cl_auth: true,
                cl_loading: false,
                isLogged: true
            };
        case LOG_SUCCESS:
        case LOG_CLIENT:
        case REG_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            // localStorage.setItem('client', action.payload.client);
            return {
                ...state,
                token: action.payload.token,
                client: action.payload.client,
                role: action.payload.client.role,
                cl_auth: true,
                cl_loading: false,
                isLogged: true
            };
        case LOG_FAIL:
        case REG_FAIL:
        case EXIT_SUCCESS:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            // localStorage.removeItem('client');
            return {
                ...state,
                token: null,
                client: null,
                cl_auth: false,
                cl_loading: false,
                clients: [],
                isLogged: false
            };
        case GET_CLIENTS:
            console.log("GET_CLIENTS REDUCER")
            return {
                ...state,
                clients: action.payload
            }
        default:
            return state;
    }
}