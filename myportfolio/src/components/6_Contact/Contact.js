import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import gif from "./sendmailgif.gif";

import "./Contact.css";
import user from "./contact.png";
import mail from "./mail.png";
import subject from "./subject.png";

export default function Contact() {
  const form = useRef();

  const [loadingScreen, SetloadingScreen] = useState({
    height: "0%",
  });

  function hide() {
    SetloadingScreen({
      backgroundImage: `url(${gif})`,
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    SetloadingScreen({
      height: "100%",
      backgroundImage: `url(${gif})`,
    });
    setTimeout(hide, 3000);
    emailjs
      .sendForm(
        "service_xi1s036",
        "template_7qp53uz",
        form.current,
        "mizm-BxTwPz21kx6X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <div className="ContactForm">
        <div className="container">
          <div className="loadingScreen" style={loadingScreen}></div>{" "}
          <div className="title">Contact Me</div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="littleTitle">Feel Free</div>
            <div className="inputcontainer">
              <img src={user}></img>
              <input
                type="text"
                name="user_name"
                placeholder="Name or Company"
              ></input>{" "}
              {/* NAME */}
            </div>
            <div className="inputcontainer">
              <img src={mail}></img>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
              ></input>{" "}
              {/* EMAIL */}
            </div>
            <div className="inputcontainer">
              <img src={subject}></img>
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
              ></input>{" "}
              {/* SUBJECT */}
            </div>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
            ></textarea>{" "}
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
