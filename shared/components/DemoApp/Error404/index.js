import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class Error404 extends Component {
    render() {
        const paddingTop = {paddingTop: "30px"}

        return (
            <div className="container">
                <Helmet>
                  <title>Pemira Himalkom</title>
                </Helmet>

                <div className="row">
                
                    <div className="col-md-4 col-md-offset-4">
                        <img src="/images/t-rex.jpg" className="img-responsive" />
                    </div>

                    <div className="col-xs-12 text-center" style={paddingTop}>
                        <p>
                            PEMIRA Himalkom Built with:
                        </p>

                        React<br />
                        React Universal<br />
                        Redux<br />
                        Bootstrap

                        <div style={paddingTop}>
                            Source code will be available tomorrow:
                        </div>
                        <a target="_blank" href="https://github.com/ivanmaulana/pemira.react">Github.com/ivanmaulana/pemira.react</a>

                        <div style={paddingTop}>
                            <a href="/" className="btn btn-primary">Back to Home</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Error404;
