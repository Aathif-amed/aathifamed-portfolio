import React from "react";
import { UilGithubAlt,UilLinkedin } from "@iconscout/react-unicons";
import "./home.css";

function Social() {
  return (
    <div className="home_social">
      {/* <a href="" className="home_social-icon" target="_blank">
        <UilTwitter />
      </a> */}
      <a href="https://github.com/Aathif-amed" rel="noreferrer"  className="home_social_icon" target="_blank">
        <UilGithubAlt  />
      </a>
      <a href="https://www.linkedin.com/in/aathifamed/"rel="noreferrer"  className="home_social_icon" target="_blank">
        <UilLinkedin/>
      </a>
    </div>
  );
}

export default Social;
