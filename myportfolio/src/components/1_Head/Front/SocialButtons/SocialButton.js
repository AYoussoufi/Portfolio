import React from "react";
import "./SocialButton.css";

export default function SocialButton(props) {
  return (
    <div className="socialButton">
      <button>
        <img src={props.image}></img>
      </button>
    </div>
  );
}
