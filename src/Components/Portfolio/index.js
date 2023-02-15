import React from "react";
import "./portfolio.css";
import Projects from "./Projects";
function Index() {
  return (
    <section className="project section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle" id="credentials">
        Credentials
      </span>

      <span className="section_subtitle" id="credentials">
        <b>User -</b>
        <b> email :</b> user@mern.com <b>password :</b> User#4321
      </span>
      <span className="section_subtitle">
        <b>Admin -</b>
        <b> email :</b> admin@mern.com <b>password :</b> Admin#4321
      </span>
      <Projects />
    </section>
  );
}

export default Index;
