import React from "react";
import "./Video.css";
import animationVideo from "../../assets/image/ShowReel.MP4";

function Video() {
  return (
    <div className="video-container">
      <video loop autoPlay className="animation-video">
        <source src={animationVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
