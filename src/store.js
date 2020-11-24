import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Login , Register } from './reducers/modalNavbarReducers';

const reducer = combineReducers({
    modalLogin : Login,
    modalRegister : Register
})
const initialState = {}
const middleware = [thunk];
const store = createStore(reducer, initialState , applyMiddleware(...middleware));

export default store;