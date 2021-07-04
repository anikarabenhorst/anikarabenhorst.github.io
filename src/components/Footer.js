import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="footer">
    <div className="footer__socials">
      <a
        href="https://www.instagram.com/anikachase/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          className="footer-social-icon footer-text"
        />
      </a>
      <a
        href="https://www.linkedin.com/anikarabenhorst/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className="footer-social-icon footer-text"
        />
      </a>
      <a
        href="https://twitter.com/anikacchase"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          className="footer-social-icon footer-text"
        />
      </a>
      <a
        href="https://www.goodreads.com/user/show/24060841-anika"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGoodreads}
          size="2x"
          className="footer-social-icon footer-text"
        />
      </a>
    </div>
    <div className="footer__text">
      <p>created with &lt;3 by anika &copy; 2021 </p>
    </div>
  </div>
);

export default Footer;
