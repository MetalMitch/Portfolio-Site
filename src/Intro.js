import React from "react";
import "./Intro.css";
import LogoCartoon from "./LogoCartoon";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__logo">
        <LogoCartoon display="block" height="200px" width="200px" />
      </div>
      <div className="intro__paragraph">
        <h4>A little bit about me...</h4>
        <p>
          A technology lover from an early age, I decided to return to education
          after rising to management in retail, in order to follow my passions
        </p>
        <p>
          In my FdSc Applied Computing course I fell in love with web
          technologies, completing my dissertation in my BSc (Hons) on the topic
          of "Web Apps vs. Native Apps"
        </p>
        <p>
          Now out of full-time education I am looking to move into industry as a
          junior or graduate developer, in my spare time constantly looking to
          improve my skills, specifically JavaScript and ReactJS
        </p>
      </div>
    </div>
  );
}

export default Intro;
