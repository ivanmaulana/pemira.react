import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLogin } from './LoginActions';
import Header from './Header';
import Form from './Form';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            loginData,
            submitLogin
        } = this.props
        
        return (
            <div>
                <Header />
                <Form
                    loginData={loginData}
                    submitLogin={submitLogin}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ loginData }) => {
    return {
        loginData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (params) => {
            dispatch(submitLogin(params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
