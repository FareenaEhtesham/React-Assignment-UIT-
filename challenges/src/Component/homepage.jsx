import React from "react";
import "./homepage.css";

function homepage() {
  return (
    <div className="Home">
      <div className="main_work">
        <h1 className="main_heading">React</h1>
        <p>A JavaScript library for building user interfaces</p>

        <div className="buttons">
          <div className="getstarted">Get Started</div>
          <div className="taking_tutorial">
            Take the tutorial
            <svg
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 4.53657 8.69699"
              style={{ marginLeft: "10px" }}
            >
              <path
                d="
        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
        0,0,1,.18254,8.697Z
      "
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homepage;
