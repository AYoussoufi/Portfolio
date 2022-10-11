import React from "react";

import "./SubBotton2.css";

export default function SubBotton(props) {
  return (
    <div className="handShake">
      <button></button>
      <span>{props.name}</span>
    </div>
  );
}
