import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    history.push("/");
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
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button className="login__signInButton" type="submit" onClick={Login}>
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
};

export default LoginForm;
