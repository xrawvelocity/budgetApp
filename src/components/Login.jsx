import React, { Component } from "react";

export default class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("PennyKeepID", "YES");
    window.location.href = "/";
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Login</h2>

          <div className="group">
            <input
            className="input"
              type="email"
              autocapitalize="off"
              autocorrect="off"
              name="email"
              size="25"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="label">Email</label>
          </div>

          <div className="group">
            <input
            className="input" type="password" name="PW" size="25" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className="label">Password</label>
          </div>

          <div>
            <input
            className="input" className="btn" type="submit" name="submit" value="Log In" />
          </div>
        </form>
      </div>
    );
  }
}
