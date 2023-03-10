import React from "react";
import { FaAws, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
function Backend() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend </h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <FaNodeJs className="skills_icon" />
            <div>
              <h3 className="skills_name">NodeJS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <FaDatabase className="skills_icon" />
            <div>
              <h3 className="skills_name">SQL</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <SiMongodb className="skills_icon" />
            <div>
              <h3 className="skills_name">MongoDB</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <FaAws className="skills_icon" />
            <div>
              <h3 className="skills_name">AWS EC2 & S3</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
