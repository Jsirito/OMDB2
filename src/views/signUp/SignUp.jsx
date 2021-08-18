import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">SignUp</div>
        <form>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">User Name</span>
              <input type="text" placeholder="Enter user name" required />
            </div>
            <div className="inputBox">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter email" required />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input type="text" placeholder="Enter password" required />
            </div>
          </div>
            <input className="button" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
