import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

function saveToLocalStorage(state) {
    try {
        const serState = JSON.stringify(state);
        localStorage.setItem('state', serState);
    } catch (e) { console.log(e) }
}

function loadFromLocalStorage() {
    try {
        const serState = localStorage.getItem('state');
        if (serState === null) return initialState;
        return JSON.parse(serState);
    } catch (e) {
        console.log(e);
        return initialState;
    }
}




const perState = loadFromLocalStorage();
const store = createStore(
    rootReducer, perState, compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;