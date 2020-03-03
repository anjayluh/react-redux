import { combineReducers } from "redux";
import products from "./products/productReducer";
import counter from "./counter/counterReducer";

export default combineReducers({
    products,
    counter
});