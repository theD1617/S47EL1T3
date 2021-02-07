import {combineReducers} from 'redux';
import itemRed from './itemRed';
import clientRed from './clientRed';
import errRed from './errRed';

export default combineReducers({
    item: itemRed,
    client: clientRed,
    err: errRed
});