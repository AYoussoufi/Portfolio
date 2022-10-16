import React from "react";
import "./Projects.css";
import project1 from "./project1.png";
import project2 from "./project2.png";
import { useState, useRef } from "react";
import $ from "jquery";

export default function Projects(props) {
  const [projectMove, setProjectMove] = useState(false);

  function sticky_relocate() {
    const window_top = $(window).scrollTop();
    const div_top = $(".Projects").offset().top;

    if (div_top - window_top - $(window).innerHeight() <= 0) {
      setProjectMove(false);
    } else {
      setProjectMove(true);
    }
  }

  $(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });

  return (
    <div className="Projects">
      <div className="title">Projects</div>
      <div
        className="container"
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
