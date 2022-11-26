import {combineReducers } from "redux";
import { productsRducer } from "./productsReducer";
export default combineReducers({
    products:productsRducer
})