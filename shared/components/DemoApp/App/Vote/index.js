import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Candidate from './Candidate';
import { receivedVote } from './VoteActions'

class Vote extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { loginData, voteData, receivedVote } = this.props

        return(
            <div>
                <Header />
                <Candidate
                    loginData={loginData}
                    voteData={voteData}
                    receivedVote={receivedVote}
                />
            </div>
        )
    }
}


const mapStateToProps = ({ loginData, voteData }) => {
    return {
        loginData,
        voteData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        receivedVote: () => {
            dispatch(receivedVote())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
