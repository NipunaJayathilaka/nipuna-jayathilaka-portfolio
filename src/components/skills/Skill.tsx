import React from "react";
import "./Skills.css";

export default function Skill(props) {
  return (
    <div className="skill-main">
      <div className="skill-logo">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="skill-name">{props.alt}</div>
    </div>
  );
}
