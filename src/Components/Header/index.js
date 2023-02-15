import React, { useState } from "react";
import "./header.css";
import * as Unicons from "@iconscout/react-unicons";
import logo from "./logo.svg";
function Index() {
  // Toggle Menu
  const [istoggle, setToggle] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            <img src={logo} style={{ marginBottom: "20px" }} alt="profilePic" />
          </a>
          <div className={istoggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active_link">
                  <Unicons.UilEstate className="nav_icon" size="20" /> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <Unicons.UilFileAlt className="nav_icon" size="20" /> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#projects" className="nav_link">
                  <Unicons.UilSuitcase className="nav_icon" size="20" />{" "}
                  Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <Unicons.UilMessage className="nav_icon" size="20" /> Contact
                </a>
              </li>
            </ul>
            <Unicons.UilTimes
              className="nav_close"
              onClick={() => {
                setToggle(!istoggle);
              }}
            />
          </div>
          <div>
            <Unicons.UilApps
              className="nav_toggle"
              onClick={() => {
                setToggle(!istoggle);
              }}
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Index;
