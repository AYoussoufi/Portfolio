import React from "react";

import NavButton from "./components/NavButton";
import "./NavBar.css";
import { useState } from "react";
import $ from "jquery";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  function sticky_relocate() {
    const window_top = $(window).scrollTop();
    const div_top = $(".About").offset().top;

    if (div_top - window_top <= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  $(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });

  return (
    <div
      className="NavBar"
      style={{ background: navbar ? "#FAB005" : "transparent" }}
    >
      <div className="buttonsbox">
        <NavButton name="About" classNm="About"></NavButton>
        <NavButton name="Skills" classNm="Skills"></NavButton>
        <NavButton name="Projects" classNm="Projects"></NavButton>
        <NavButton name="Experience" classNm="Study"></NavButton>
        <NavButton name="Contact" classNm="Contact"></NavButton>
      </div>
    </div>
  );
}
