import React from "react";
import "boxicons/dist/boxicons";

function Frontend() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <box-icon name="file-html" type="solid" className="skills_icon"></box-icon>
            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <box-icon name="file-css" type="solid" className="skills_icon"></box-icon>
            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <box-icon name='javascript' type='logo'className="skills_icon"></box-icon>
            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          </div>
        <div className="skills_group">

          <div className="skills_data">
            <box-icon  name='bootstrap' type='logo' className="skills_icon"></box-icon>
            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <box-icon name='git' type='logo'className="skills_icon"></box-icon>
            <div>
              <h3 className="skills_name">Git</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <box-icon name='react' type='logo'className="skills_icon"></box-icon>
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
