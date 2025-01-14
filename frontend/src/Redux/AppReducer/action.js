import axios from "axios";

import * as types from "./actionTypes"


const getProductRequest =()=>{
    return{

        type: types.GET_PRODUCTS_REQUEST,
    }
}



const getProduct = (queryParams) =>(dispatch) =>{
    dispatch(getProductRequest());
    return axios.get(`http://localhost:7000/products`,queryParams)
    .then((res)=>{
        dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: res.data,
        });
        console.log(res.data)
    })
    .catch((err)=>{
        dispatch({
            type: types.GET_PRODUCTS_FAILURE,
        })
        console.log(err)
    })
}
export {getProduct, getProductRequest}