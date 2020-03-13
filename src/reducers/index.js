import { combineReducers } from "redux";
import postReducer from "./postReducer.jsx";
import counterReducer from "./counterReducer.jsx";

export default combineReducers({
    posts: postReducer,
    counter: counterReducer
});