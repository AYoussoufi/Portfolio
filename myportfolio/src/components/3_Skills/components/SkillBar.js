import React from "react";
import "./SkillBar.css";

import { useState, useRef } from "react";

export default function SkillBar(props) {
  const [percentage, setPercentage] = useState(0);

  const barElement = useRef();
  const [barmove, setBarMove] = useState(false);

  const barMove = () => {
    if (barElement.current) {
      if (barElement.current.offsetTop - window.scrollY <= 940) {
        setBarMove(true);
      } else {
        setBarMove(false);
      }
    }
  };

  window.addEventListener("scroll", barMove);

  return (
    <div
      className="SkillBar"
      ref={barElement}
      style={{ marginTop: barmove ? "0px" : "50px" }}
    >
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
