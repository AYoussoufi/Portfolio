import React from "react";
import image from "./pdf-file.png";
import "./SubBotton.css";

export default function SubBotton(props) {
  return (
    <div className="pdfFile">
      <button></button>
      <span>{props.name}</span>
    </div>
  );
}
