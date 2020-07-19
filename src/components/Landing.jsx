import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCheckCircle, faCoins } from "@fortawesome/free-solid-svg-icons";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <section className="landing-hero">
          <div className="landing-hero-cta">
            <h1 className="landing-hero-cta-text">
              Keep every penny where it belongs! Budgeting has never been
              easier.
            </h1>
            <Link to="/signup" className="landing-hero-cta-btn">
              Create an account &ndash; it's free
            </Link>
          </div>
          <div className="landing-hero-img">
            <img src="./images/laptop.png" alt="laptop" />
          </div>
        </section>
        <section className="landing-description">
          Budgeting tools like no others; visualize your spending and your
          savings with graphs
        </section>
        <section className="landing-features">
          <div className="landing-features-each">
              <div className="landing-features-each-img landing-features-each-img_1">
                  <FontAwesomeIcon icon={faCoins} />
              </div>
              <div className="landing-features-each-title landing-features-each-title_1">Free</div>
              <div className="landing-features-each-text landing-features-each-text_1">Unlike other budgeting websites, we deliver free features that you would otherwise have to pay for</div>
          </div>
          <div className="landing-features-each">
              <div className="landing-features-each-img landing-features-each-img_2">
                  <FontAwesomeIcon icon={faChartBar} />
              </div>
              <div className="landing-features-each-title landing-features-each-title_2">Efficient</div>
              <div className="landing-features-each-text landing-features-each-text_2">With over 5 different charts, analyze your expenses and income using the charts of your choice</div>
          </div>
          <div className="landing-features-each">
              <div className="landing-features-each-img landing-features-each-img_3">
                  <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="landing-features-each-title landing-features-each-title_3">Simple</div>
              <div className="landing-features-each-text landing-features-each-text_3">This isn't another complicated budgeting website. In just 3 steps you can have your account ready!</div>
          </div>
        </section>
        <section className="landing-details"></section>
        <section className="landing-testimonials"></section>
        <section className="landing-cta"></section>
        <Footer />
      </div>
    );
  }
}
