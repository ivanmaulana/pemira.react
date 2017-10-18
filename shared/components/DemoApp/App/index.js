import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Login from './Login';
import Vote from './Vote';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            loginData,
            voteData
        } = this.props

        return(
            <div style={{ paddingTop: '20px' }}>
              <Helmet>
                <title>Pemira Himalkom</title>
              </Helmet>

              <Vote></Vote>
            </div>
        )
    }
}

// {loginData.isSuccess && <Vote />}
// {!loginData.isSuccess && <Login />}

const mapStateToProps = ({ loginData, voteData }) => {
    return {
        loginData,
        voteData
    };
};

export default connect(mapStateToProps)(App);
