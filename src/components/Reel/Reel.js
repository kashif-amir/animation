import React, { useRef, useState } from 'react';
import './Reel.css'; // Assuming you have a CSS file
import reel from "../../assets/videos/Latest ShowReel 04 Low_1.mp4"
import AboutHeader from '../About/AboutHeader';


const VideoPlayer = () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
        <AboutHeader/>
        <div className="video-container">
        <video ref={videoRef} autoPlay loop className="animation-video" >
            <source src={reel} type="video/mp4" />
        </video>
        <button className="play-button" onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        </div>
    </div>

  );
};

export default VideoPlayer;
