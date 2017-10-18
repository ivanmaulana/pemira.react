import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Candidate from './Candidate';

class Vote extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Header />
                <Candidate />
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
