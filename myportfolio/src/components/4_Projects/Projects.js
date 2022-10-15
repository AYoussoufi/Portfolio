import React from "react";
import "./Projects.css";
import project1 from "./project1.png";
import project2 from "./project2.png";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="title">Projects</div>
      <div className="container">
        <div className="projectholder">
          <div className="project">
            SENSOR READER
            <img src={project1}></img>
          </div>
          <div className="project">
            STUDENT MANAGEMENT
            <img src={project2}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
