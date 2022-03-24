import { combineReducers } from 'redux';
import userReducer from './userReducer';
import accountReducer from './accountReducer';
import homeReducer from './homeReducer';

const mainReducer = combineReducers({
  userReducer,
  accountReducer,
  homeReducer,
});

export default mainReducer;
