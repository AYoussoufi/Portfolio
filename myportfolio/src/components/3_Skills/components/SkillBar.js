import React from "react";
import "./SkillBar.css";
import $ from "jquery";

import { useState, useRef } from "react";

export default function SkillBar(props) {
  const [barmove, setBarMove] = useState(false);

  function sticky_relocate() {
    const window_top = $(window).scrollTop();
    const div_top = $(".boxskills").offset().top;

    if (div_top - window_top - $(window).innerHeight() <= -100) {
      setBarMove(true);
    } else {
      setBarMove(false);
    }
  }

  $(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });

  return (
    <div className="SkillBar" style={{ marginTop: barmove ? "0px" : "100px" }}>
      <div className="SkillName">
        <div>{props.name}</div>
        <div>{props.percentage + "%"}</div>
      </div>
      <div className="SkillChartBar">
        <div className="barcontainer">
          <div
            className="bar"
            style={{ width: barmove ? props.percentage + "%" : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
