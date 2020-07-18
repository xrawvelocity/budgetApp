import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-hero">
          <div className="landing-hero-cta">
            <h1 className="landing-hero-cta-text">
              Keep every penny where it belongs! Budgeting has never been
              easier.
            </h1>
            <button className="landing-hero-cta-btn">Sign Up</button>
          </div>
          <div className="landing-hero-img">
            <img src="./images/laptop.png" alt="laptop" />
          </div>
        </div>
      </div>
    );
  }
}
