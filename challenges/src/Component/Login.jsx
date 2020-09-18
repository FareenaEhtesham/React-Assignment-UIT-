import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class LoginForm extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    const Login = (e) => {
      e.preventDefault();
      this.props.history.push("/blog");
    };

    const SignUp = (e) => {
      e.preventDefault();
    };

    return (
      <div className="login">
        <Link to="/">
          <img
            className="loginLogo"
            src="https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
        </Link>

        <div className="login__container">
          <h1>Sign-In</h1>

          <form>
            <h5>Email</h5>
            <input
              type="text"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />

            <button
              className="login__signInButton"
              type="submit"
              onClick={Login}
            >
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the REACT JS Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button className="login__registerButton" onClick={SignUp}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
