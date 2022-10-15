import React from "react";

import NavButton from "./components/NavButton";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className="NavBar"
      style={{ background: navbar ? "#FAB005" : "transparent" }}
    >
      <div className="buttonsbox">
        <NavButton name="About"></NavButton>
        <NavButton name="Skills"></NavButton>
        <NavButton name="Projects"></NavButton>
        <NavButton name="Experience"></NavButton>
        <NavButton name="Contact"></NavButton>
      </div>
    </div>
  );
}
