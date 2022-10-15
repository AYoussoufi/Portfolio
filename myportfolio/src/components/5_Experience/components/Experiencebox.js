import React from "react";
import "./experiencebox.css";

export default function Experiencebox(props) {
  return (
    <div className="experiencebox">
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
