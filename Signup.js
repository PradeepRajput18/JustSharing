import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div className="body-Signup">
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="phone number" />
              <input type="password" placeholder="password" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
