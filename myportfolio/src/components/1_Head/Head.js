import React from "react";
import NavBar from "./NavBar/NavBar";
import Front from "./Front/Front";
import "./Head.css";

export default function Head() {
  return (
    <div className="Head">
      <NavBar></NavBar>
      <Front></Front>
    </div>
  );
}
