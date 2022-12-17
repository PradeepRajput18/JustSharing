import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="body-Login">
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button>login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
