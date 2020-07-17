import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div className="login">
        <form className="form">
          <h2 className="title">Sign Up</h2>

          <div className="group">
            <input
              type="email"
              autocapitalize="off"
              autocorrect="off"
              name="MERGE0"
              id="MERGE0"
              size="25"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>

          <div className="group">
            <input type="password" name="MERGE1" id="MERGE1" size="25" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Password</label>
          </div>

          <div className="group">
            <input type="password" name="MERGE1" id="MERGE1" size="25" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Confirm Password</label>
          </div>

          <div>
            <input className="btn" type="submit" name="submit" value="Sign Up" />
          </div>

        </form>
      </div>
    );
  }
}
