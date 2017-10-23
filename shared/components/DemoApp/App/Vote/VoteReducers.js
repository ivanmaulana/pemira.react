import {
    RECEIVED_VOTE
} from './VoteActions'
import { voteDataState } from '../../initialState';

const voteReducer = (state = voteDataState, action) => {
    switch (action.type) {
        case RECEIVED_VOTE: {
            return Object.assign({}, state, {
                isSuccess: true
            })
        }
        default:
            return state
    }
};

export default voteReducer
