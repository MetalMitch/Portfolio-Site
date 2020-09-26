import React from "react";
import "./Footer.css";
import LogoCartoon from "./LogoCartoon";
import Social from "./Social";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import ReactIcon from "./assets/react-logo.svg";
import CopyrightNotice from "react-copyright-notice-component";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <Social
          SocialIcon={LinkedInIcon}
          link="http://www.linkedin.com/in/mitchell-skee"
        />
        <Social SocialIcon={GitHubIcon} link="https://github.com/MetalMitch" />
        <Social SocialIcon={EmailIcon} link="mailto:mitchell@mskee.co.uk" />
      </div>
      <div className="final">
        <h6>
          <img src={ReactIcon} className="App-logo" alt="React Logo" />
          Made with React
        </h6>
      </div>
      <div className="footer__logo">
        <LogoCartoon display="block" height="50px" width="50px" />
      </div>
      <div className="footer_title">
        <CopyrightNotice copyrightHolder="Mitchell Skee" />
      </div>
    </div>
  );
}

export default Footer;
