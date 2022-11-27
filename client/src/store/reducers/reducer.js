import {combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsRducer } from "./productsReducer";
export default combineReducers({
    products:productsRducer,
    cart:cartReducer
})