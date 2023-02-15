import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import "./footer.css";
function Index() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Mohamed Aathif</h1>
        <div className="footer_social">
          <a
            href="https://github.com/Aathif-amed"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <Unicons.UilGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/aathifamed/"
            rel="noreferrer"
            className="footer_social_link"
            target="_blank"
          >
            <Unicons.UilLinkedin />
          </a>
        </div>
        <span className="footer_copy">
          &#169; Aathifamed. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Index;
