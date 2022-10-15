import React from "react";

import "./Contact.css";
import user from "./contact.png";
import mail from "./mail.png";
import subject from "./subject.png";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="ContactForm">
        <div className="container">
          {" "}
          <div className="title">Contact Me</div>
          <form>
            <div className="littleTitle">Feel Free</div>
            <div className="inputcontainer">
              <img src={user}></img>
              <input type="text" placeholder="Name"></input> {/* NAME */}
            </div>
            <div className="inputcontainer">
              <img src={mail}></img>
              <input type="text" placeholder="Email"></input> {/* EMAIL */}
            </div>
            <div className="inputcontainer">
              <img src={subject}></img>
              <input type="text" placeholder="Subject"></input> {/* SUBJECT */}
            </div>
            <textarea type="text" placeholder="Message"></textarea>{" "}
            {/* MESSAGE */}
            <input type="submit" value="Send"></input>
          </form>
          <div className="myInfo">
            <div className="littleTitle">Address</div>
            <div className="desc">1196 BOULEVARD MOHAMMED VI</div>
            <div className="littleTitle">Phone</div>
            <div className="desc">+212616626978</div>
            <div className="littleTitle">Email</div>
            <div className="desc">akram.lyoussoufi@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
