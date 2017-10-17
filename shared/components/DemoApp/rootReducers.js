import { combineReducers } from 'redux';
import loginReducer from './App/Login/LoginReducers';
import voteReducer from './App/Vote/VoteReducers';

const rootReducer = combineReducers({
  loginData: loginReducer,
  voteData: voteReducer
});

export default rootReducer;
