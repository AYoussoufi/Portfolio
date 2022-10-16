import React from "react";
import "./NavButton.css";
import $ from "jquery";

export default function NavButton(props) {
  function scrollTo() {
    document.getElementsByClassName(props.classNm)[0].scrollIntoView({
      behavior: "smooth",
    });
  }

  return <button onClick={scrollTo}>{props.name}</button>;
}
