import React from "react";

import "./SubBotton2.css";

export default function SubBotton(props) {
  return (
    <div className="handShake">
      <button
        onClick={() => {
          document.getElementsByClassName("Contact")[0].scrollIntoView({
            behavior: "smooth",
          });
        }}
      ></button>
      <span>{props.name}</span>
    </div>
  );
}
