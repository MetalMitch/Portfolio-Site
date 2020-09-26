import React from "react";
import "./Social.css";

function Social({ SocialIcon, link }) {
  return (
    <a href={link}>
      <div className="social">
        <SocialIcon />
      </div>
    </a>
  );
}

export default Social;
