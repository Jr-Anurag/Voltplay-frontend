import axios from "axios";

import * as actionType from '../constants/cartConstant';


export const addToCart = (id, quantity) => async(dispatch,getState )=> {
    try {
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}});
    } catch (error) {
        dispatch({type:actionType.ADD_TO_CART_ERROR,payload:error.message});
        console.log('Error while calling cart API');
    }
}



export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({type:actionType.REMOVE_FROM_CART, payload: id});
}
