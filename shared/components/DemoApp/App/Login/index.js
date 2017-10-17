import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Login;
