import React from "react";
import "./About.css";
import meAnime from "./me-anime.png";

export default function About() {
  return (
    <div className="About">
      <div className="aboutbox">
        <div className="title">About</div>

        <div className="imagebox">
          <img src={meAnime}></img>
        </div>
        <div className="textbox">
          <div>
            <span>
              {" "}
              Hello! I'm Akram Youssoufi a <b>Web Developer</b>, I specialize in
              both layers <b>FrontEnd</b> and <b>BackEnd.</b>
              <br></br>I was once in the construction field I learned how to
              build houses and bridges, manage the site, and more things that I
              still use it right now in my development process, it's like
              changing from building in real life to virtual one.<br></br>i have
              always loved software and web development so i decided to change
              my carrier to what i love and enjoy most, which made me learn and
              improve my skills in both front-end and back-end
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
