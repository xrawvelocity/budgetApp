import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-links">
          <a
            href="https://www.facebook.com/"
            className="footer-links_facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer-links_instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          
        </div>
        <Link to="/" style={{marginTop: 0}} className="nav-logo-flex">
            <div className="nav-logo-lines">
              <div className="nav-logo-lines_1"></div>
              <div className="nav-logo-lines_2"></div>
              <div className="nav-logo-lines_3"></div>
            </div>
            <h1 className="nav-logo-text">Penny Keep</h1>
          </Link>
        <div className="footer-contact">
          <p>
            Email:{" "}
            <a href="mailto:fernandezvictordev@gmail.com">fernandezvictordev@gmail.com</a>
          </p>
          <p>
            Website created by &nbsp;
            <a
              href="https://www.vic-dev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Victor
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
