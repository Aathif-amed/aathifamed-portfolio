import React, { useState } from "react";
import "./header.css";
import { UilEstate,UilFileAlt,UilUser,UilMessage,UilSuitcase,UilTimes,UilApps } from "@iconscout/react-unicons";

function Index() {
  // Toggle Menu
  const[istoggle,setToggle]=useState(false)
return   <>
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Aathif
        </a>
        <div className={istoggle?"nav_menu show_menu": "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active_link">
                <UilEstate className="nav_icon" size="20" /> Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <UilUser className="nav_icon" size="20"/> About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <UilFileAlt className="nav_icon"  size="20"/> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link">
                <UilSuitcase className="nav_icon"  size="20" /> Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <UilMessage className="nav_icon"  size="20" /> Contact
              </a>
            </li>
            {/* <li className="nav_item">
              <a href="#a" className="nav_link">
                <UilEstate />
              </a>
            </li> */}
          </ul>
          <UilTimes className="nav_close"onClick={()=>{setToggle(!istoggle)}}/>
        </div>
        <div className="nav_toggle" onClick={()=>{setToggle(!istoggle)}}>
          <UilApps size="17.6"/>
        </div>
      </nav>
    </header>
    </>

}

export default Index;
