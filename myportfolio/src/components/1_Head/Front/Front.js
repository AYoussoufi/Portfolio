import React from "react";
import "./Front.css";
import SubBotton from "./components/SubBotton";
import SubBotton2 from "./components/SubBotton2";

export default function Front() {
  return (
    <div className="Front">
      <div className="myPdp"></div>
      <div className="myName">Akram Youssoufi</div>
      <div className="subTitle">A Web Developer , BackEnd & FrontEnd</div>
      <div className="subButtons">
        <SubBotton name="My Resume"></SubBotton>
        <SubBotton2 name="Hire Me"></SubBotton2>
      </div>
    </div>
  );
}
