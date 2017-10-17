import { combineReducers } from 'redux';
import loginReducer from './App/Login/LoginReducers';

const rootReducer = combineReducers({
  loginData: loginReducer
});

export default rootReducer;
