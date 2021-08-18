import React from "react";
import "./LogIn.css"

function LogIn() {
  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">LogIn</div>
        <form>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter email" required />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter password" required />
            </div>
          </div>
          <input className="button" type="submit" value="Go!" />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
