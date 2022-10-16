import React from "react";
import "./experiencebox.css";
import { useState } from "react";
import $ from "jquery";

export default function Experiencebox(props) {
  const [experMove, setExperMove] = useState(false);

  function sticky_relocate() {
    const window_top = $(window).scrollTop();
    const div_top = $(".Experience").offset().top;

    if (div_top - window_top - $(window).innerHeight() <= 0) {
      setExperMove(true);
    } else {
      setExperMove(false);
    }
  }

  $(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });

  return (
    <div
      className="experiencebox"
      style={{ marginTop: experMove ? "0px" : "100px" }}
    >
      <div className="titlebox">
        <div style={{ fontSize: "1em" }}>{props.date}</div>
        <div style={{ fontSize: "1.3em", width: "80%" }}>
          {props.entreprise}
        </div>
      </div>
      <div className="descrbox">
        <div className="titledsc">{props.title}</div>
        <div className="textdsc">{props.desc}</div>
      </div>
    </div>
  );
}
