import React from "react";
import "./Projects.css";
import project1 from "./project1.png";
import project2 from "./project2.png";
import { useState, useRef } from "react";

export default function Projects(props) {
  const project = useRef();
  const [projectMove, setProjectMove] = useState(false);

  const projectMoveF = () => {
    if (project.current) {
      if (window.scrollY <= 1070) {
        setProjectMove(true);
      } else {
        setProjectMove(false);
      }
    }
  };

  window.addEventListener("scroll", projectMoveF);
  return (
    <div className="Projects">
      <div className="title">Projects</div>
      <div
        className="container"
        ref={project}
        style={{ paddingTop: projectMove ? "250px" : "0px" }}
      >
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
