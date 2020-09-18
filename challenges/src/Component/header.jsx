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
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt=""
          height="20"
        />
        <span className="react">REACT</span>

        <div className="header__option">Docs</div>

        <div className="header__option">Tutorial</div>
        <Link to="/blog">
          <div className="header__option">Blog</div>
        </Link>
        <div className="header__option">Community</div>
        <Link to="/login">
          <div className="header__option">Login</div>
        </Link>
        <input type="text" placeholder="Search" />

        <div style={{ fontSize: "15px" }} className="header__option">
          v16.13.1
        </div>
        <div style={{ fontSize: "15px" }} className="header__option">
          Languages
        </div>
        <div style={{ fontSize: "15px" }} className="header__option">
          Github
        </div>
      </div>
    </div>
  );
};
export default Header;
