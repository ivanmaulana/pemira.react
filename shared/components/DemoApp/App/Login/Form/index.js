import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend className="col-md-12">Silahkan masuk dengan akun IPB</legend>
              <div className="form-group col-md-12">
                <label htmlFor="email">Username : </label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="icon ion-person" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    autoFocus
                    autoComplete="off"
                    value={username}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="email">Password : </label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="icon ion-locked" />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-12">
                <div className="form-group col-md-12">
                  <button type="submit" className="btn btn-primary raised btn-block">
                    Masuk
                  </button>
                  <br />
                </div>
              </div>
            </fieldset>
          </form>
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <blockquote className="blockquote-reverse">
                <p>
                  <b>
                    <i>PEMILIHAN KETUA DAN WAKIL KETUA HIMALKOM 2017 / 2018</i>
                  </b>
                </p>
                <small>
                  <cite title="Source Title">
                    <a>@2017, HIMALKOM IPB </a>||
                    <a href="https://www.linkedin.com/in/ivanmaulana"> Ivan Maulana</a> |{' '}
                    <a href="https://www.linkedin.com/in/irmusyafa">Irfan Rafii Musyafa</a>
                  </cite>
                </small>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
