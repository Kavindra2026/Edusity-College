import React, { useRef } from "react";
import './Video.css'
import video from "..//..//../public/assets/college-video.mp4";

const Video = ({ playSate, setPlaySate }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlaySate(false);
    }
  };

  return (
    <div
      className={`video-player ${playSate ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Video;
