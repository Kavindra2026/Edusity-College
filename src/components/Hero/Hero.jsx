import React from "react"; 
import dark_arrow from "..//..//../public/assets/dark-arrow.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero Container">
      <div className="hero-heading">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button class="btn"><a href="https://www.edusity.com/"> Explore more</a> <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
