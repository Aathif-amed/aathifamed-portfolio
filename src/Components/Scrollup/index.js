import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import "./scrollup.css";
function Index() {
  window.addEventListener("scroll", function () {
    const scrollup = this.document.querySelector(".scrollup");
    if (this.scrollY >= 300) {
      scrollup.classList.add("show_scroll");
    } else {
      scrollup.classList.remove("show_scroll");
    }
  });
  return (
    <a href="#home" className="scrollup">
      <Unicons.UilArrowUp className="scrollup_icon" size={30} />
    </a>
  );
}

export default Index;
