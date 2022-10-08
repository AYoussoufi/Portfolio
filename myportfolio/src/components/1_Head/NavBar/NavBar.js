import React from "react";
import NavButton from "./components/NavButton";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">Logo</div>
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
