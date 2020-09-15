import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="upperpart">
        <h1>
          Black Lives Matter.{" "}
          <span style={{ color: "#61dafb" }}>
            {" "}
            Support the Equal Justice Initiative.
          </span>
        </h1>
      </div>

      <div className="header__nav">
        <div className="header__option">Docs</div>

        <div className="header__option">Tutorial</div>
        <div className="header__option">Blog</div>
        <div className="header__option">Community</div>
        <Link to="/login">
          <div className="header__option">Login</div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
