import React from "react";
import "./Skills.css";
import SkillBar from "./components/SkillBar";
import { useRef } from "react";

export default function Skills() {
  return (
    <div className="Skills">
      <div className="title">Professional Skills</div>
      <div className="boxskills">
        <div className="container">
          <SkillBar name="JAVA" percentage={80}></SkillBar>
          <SkillBar name="JEE" percentage={75}></SkillBar>
          <SkillBar name="Spring" percentage={75}></SkillBar>
          <SkillBar name="Hibernate" percentage={70}></SkillBar>
          <SkillBar name="ReactJS" percentage={70}></SkillBar>
          <SkillBar name="Javascript" percentage={70}></SkillBar>
          <SkillBar name="HTML" percentage={80}></SkillBar>
          <SkillBar name="CSS/SCSS" percentage={80}></SkillBar>
          <SkillBar name="Adaptability" percentage={90}></SkillBar>
          <SkillBar name="PhotoShop" percentage={50}></SkillBar>
        </div>
      </div>
    </div>
  );
}
