import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {

  render() {
    return !localStorage.getItem("PennyKeepID") ? (
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-flex">
            <div className="nav-logo-lines">
              <div className="nav-logo-lines_1"></div>
              <div className="nav-logo-lines_2"></div>
              <div className="nav-logo-lines_3"></div>
            </div>
            <h1 className="nav-logo-text">Penny Keep</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </nav>
    ) : (
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/" className="nav-logo-flex">
            <div className="nav-logo-lines">
              <div className="nav-logo-lines_1"></div>
              <div className="nav-logo-lines_2"></div>
              <div className="nav-logo-lines_3"></div>
            </div>
            <h1 className="nav-logo-text">Penny Keep</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/profile">Profile</Link>
          <div onClick={()=>{
              localStorage.removeItem("PennyKeepID");
              this.forceUpdate();
              window.location.href = "/"
          }}>Log Out</div>
        </div>
      </nav>
    );
  }
}
