import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        console.log('Hiiiiii')
        const { data } = await axios.get(`http://localhost:8000/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};




export const getProductDetails =(id)=> async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCTS_DETAILS_REQUEST});
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DEATILS_SUCCESS, payload: data });

    }catch(error){
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response });
    }
    }

