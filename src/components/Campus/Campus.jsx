import React from "react";
import "./Campus.css";
import Gallery_1 from "../../././../public/assets/gallery-1.png";
import Gallery_2 from "../../././../public/assets/gallery-2.png";
import Gallery_3 from "../../././../public/assets/gallery-3.png";
import Gallery_4 from "../../././../public/assets/gallery-4.png";
import white_arrow from'..//..//..//public/assets/white-arrow.png'
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={Gallery_1} alt="Gallery-1 " />
        <img src={Gallery_2} alt="Gallery-2 " />
        <img src={Gallery_3} alt="Gallery-3 " />
        <img src={Gallery_4} alt="Gallery-4 " />
      </div>
      <button className="btn dark-btn">See more here <img src={white_arrow}alt="" /></button>
    </div>
  );
};

export default Campus;
