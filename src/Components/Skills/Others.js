import React from "react";
import { FaCloud, FaGitAlt } from "react-icons/fa";
import { SiNetlify, SiPostman } from "react-icons/si";
function Others() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Others </h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <SiPostman className="skills_icon" />
            <div>
              <h3 className="skills_name">PostMan</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <SiNetlify className="skills_icon" />
            <div>
              <h3 className="skills_name">Netlify</h3>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <FaGitAlt className="skills_icon" />
            <div>
              <h3 className="skills_name">Git</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <FaCloud className="skills_icon" />
            <div>
              <h3 className="skills_name">Render</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Others;
