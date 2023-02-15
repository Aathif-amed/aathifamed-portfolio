import React from "react";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";

import { SiJavascript, SiMaterialui } from "react-icons/si";

function Frontend() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <FaHtml5 className="skills_icon" />
            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <FaCss3Alt className="skills_icon" />
            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <SiJavascript className="skills_icon" />
            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <FaBootstrap className="skills_icon" />
            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <SiMaterialui className="skills_icon" />
            <div>
              <h3 className="skills_name">Mui</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
          <div className="skills_data">
            <FaReact className="skills_icon" />
            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
