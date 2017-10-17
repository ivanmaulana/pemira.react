import { combineReducers } from 'redux';
import loginReducer from './App/Login/LoginReducers';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
