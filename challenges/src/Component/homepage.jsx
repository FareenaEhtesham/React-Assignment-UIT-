import React from "react";
import './homepage.css'

function homepage() {
  return (
      <div className="Home">

          <div className="main_work">
              <h1 className="main_heading">React</h1>
              <p>A JavaScript library for building user interfaces</p>
              
              <div className="buttons">
                  <div className="getstarted">
                     Get Started
                  </div>
                  <div className="taking_tutorial">
                      Take the tutorial
                  </div>
              </div>
          </div>
       
      </div>

  );
}

export default homepage;
