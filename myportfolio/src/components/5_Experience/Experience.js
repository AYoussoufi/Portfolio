import React from "react";
import "./Experience.css";
import Experiencebox from "./components/Experiencebox";
import looking from "./looking.png";

export default function Experience() {
  const detailexp = [
    {
      date: "JAN 2020-2021",
      entreprise: "TGCC | LPEE",
      title: "Construction Field",
      desc: "This resume my construction field experience which i was in it a Works Supervisor Assistant on two sites WALILIA & SIEGE DOHA and I worked as well as a Laboratory Testing and Analyzing on aggregate",
    },
  ];

  return (
    <div className="Experience">
      <div className="title">Experience</div>
      <div className="container">
        <Experiencebox
          date={detailexp[0].date}
          entreprise={detailexp[0].entreprise}
          title={detailexp[0].title}
          desc={detailexp[0].desc}
        ></Experiencebox>

        <div className="tempodiv">
          <img src={looking}></img>
          Still looking for an Internship in the developement field.
        </div>
      </div>
    </div>
  );
}
