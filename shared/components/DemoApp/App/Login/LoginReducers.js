import {
    RECEIVED_SUBMIT_LOGIN,
    REQUEST_SUBMIT_LOGIN,
} from './LoginActions'
import {
    RECEIVED_VOTE
} from '../Vote/VoteActions'
import { loginDataState } from '../../initialState';

const loginReducer = (state = loginDataState, action) => {
    switch (action.type) {
        case RECEIVED_SUBMIT_LOGIN: {
            const { response } = action

            if (response.status) {
                const { token } = response
                const payload = JSON.parse(atob(token.split(".")[1]))
                const { nama, nim } = payload

                return Object.assign({}, state, {
                    isLoading: false,
                    isSuccess: true,
                    errors: [],
                    token,
                    nama,
                    nim
                })
            }

            return Object.assign({}, state, {
                isLoading: false,
                isSuccess: false,
                errors: [response.message]
            })
        }
        case REQUEST_SUBMIT_LOGIN: {
            return Object.assign({}, state, {
                isLoading: true,
                errors: []
            })
        }
        case RECEIVED_VOTE: {
            return Object.assign({}, state, {
                isLoading: false,
                errors: [],
                isSuccess: false,
                token: null,
                nama: null,
                nim: null
            })
        }
        default:
            return state
    }
};

export default loginReducer
