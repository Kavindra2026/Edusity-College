import React from "react";
import "./Title.css";
const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      <p>{subtitle}</p>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
