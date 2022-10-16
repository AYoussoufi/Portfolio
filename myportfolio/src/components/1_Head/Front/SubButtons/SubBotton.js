import React from "react";
import image from "./pdf-file.png";
import "./SubBotton.css";

export default function SubBotton(props) {
  return (
    <div className="pdfFile">
      <button
        onClick={() => {
          window.open("/CV%20AKRAM_YOUSSOUFI_ENG.pdf");
        }}
      ></button>
      <span>{props.name}</span>
    </div>
  );
}
