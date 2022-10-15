import React from "react";
import "./SkillBar.css";

export default function SkillBar(props) {
  return (
    <div className="SkillBar">
      <div className="SkillName">
        <div>{props.name}</div>
        <div>{props.percentage}</div>
      </div>
      <div className="SkillChartBar">
        <div className="barcontainer">
          <div className="bar" style={{ width: props.percentage }}></div>
        </div>
      </div>
    </div>
  );
}
