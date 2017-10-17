import {
    RECEIVED_SUBMIT_LOGIN,
    REQUEST_SUBMIT_LOGIN
} from './LoginActions'
import { loginDataState } from '../../initialState';

const loginReducer = (state = loginDataState, action) => {
    switch (action.type) {
        case RECEIVED_SUBMIT_LOGIN: {
            return Object.assign({}, state, {
                isLoading: false,
                errors: []
            })
        }
        case REQUEST_SUBMIT_LOGIN: {
            return Object.assign({}, state, {
                isLoading: true,
                errors: []
            })
        }
        default:
            return state
    }
};

export default loginReducer
