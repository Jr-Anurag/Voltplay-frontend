import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';

import { getProductsReducer,getProductDetailsReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const middleware = [thunk];


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cartReducer
});



const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware)
));

// import {createStore,combineReducers,applyMiddleware} from 'redux'

// import { thunk } from 'redux-thunk';


// import { getProductsReducer } from './productReducer';

// const middleware = [thunk];


// const allReducers = combineReducers({
//     getProducts:getProductsReducer
// })

// const store = createStore(allReducers, applyMiddleware(...middleware));

export default store;