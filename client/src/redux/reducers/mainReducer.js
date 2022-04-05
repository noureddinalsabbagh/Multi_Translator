import { combineReducers } from 'redux';
import userReducer from './userReducer';
import accountReducer from './accountReducer';
import homeReducer from './homeReducer';
import quizReducer from "./quizReducer";

const mainReducer = combineReducers({
  userReducer,
  accountReducer,
  homeReducer,
  quizReducer
});

export default mainReducer;
