import React from "react";
import "./experiencebox.css";
import { useState, useRef } from "react";

export default function Experiencebox(props) {
  const exper = useRef();
  const [experMove, setExperMove] = useState(false);

  const expMove = () => {
    if (exper.current) {
      if (window.scrollY >= 2980) {
        setExperMove(true);
      } else {
        setExperMove(false);
      }
    }
  };

  window.addEventListener("scroll", expMove);
  return (
    <div
      className="experiencebox"
      ref={exper}
      style={{ marginTop: experMove ? "0px" : "100px" }}
    >
      <div className="titlebox">
        <div style={{ fontSize: "1em" }}>{props.date}</div>
        <div style={{ fontSize: "1.6em" }}>{props.entreprise}</div>
      </div>
      <div className="descrbox">
        <div className="titledsc">{props.title}</div>
        <div className="textdsc">{props.desc}</div>
      </div>
    </div>
  );
}
