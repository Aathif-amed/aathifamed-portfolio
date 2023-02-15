import React, { useState } from "react";
import "./header.css";
import * as Unicons from "@iconscout/react-unicons";
function Index() {
  //change header background
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll_header");
    } else {
      header.classList.remove("scroll_header");
    }
  });
  // Toggle Menu
  const [istoggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            <i>Mohamed Aathif</i>
          </a>
          <div className="nav_toggle">
            <Unicons.UilApps
              onClick={() => {
                setToggle(!istoggle);
              }}
            />
          </div>
          <div className={istoggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home" ? "nav_link active_link" : "nav_link "
                  }
                >
                  <Unicons.UilEstate className="nav_icon" size="20" /> Home
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav_link active_link"
                      : "nav_link "
                  }
                >
                  <Unicons.UilFileAlt className="nav_icon" size="20" /> Skills
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#projects"
                      ? "nav_link active_link"
                      : "nav_link "
                  }
                >
                  <Unicons.UilSuitcase className="nav_icon" size="20" />{" "}
                  Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav === "#contact"
                      ? "nav_link active_link"
                      : "nav_link "
                  }
                >
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
        </nav>
      </header>
    </>
  );
}

export default Index;
