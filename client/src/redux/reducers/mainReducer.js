import { combineReducers } from "redux";
import userReducer from "./userReducer"

const mainReducer = combineReducers({ userReducer })

export default mainReducer