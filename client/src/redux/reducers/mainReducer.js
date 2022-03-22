import { combineReducers } from "redux";
import userReducer from "./userReducer"
import accountReducer from "./accountReducer"

const mainReducer = combineReducers({ userReducer, accountReducer })

export default mainReducer