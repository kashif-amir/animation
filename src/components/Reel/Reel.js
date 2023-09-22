import React, { useRef, useState } from 'react';
import './Reel.css'; // Assuming you have a CSS file
import reel from "../../assets/videos/Latest ShowReel 04 Low_1.mp4"
import AboutHeader from '../About/AboutHeader';
import { BsPauseCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";



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
          <video ref={videoRef} autoPlay={true} loop controls={false} className="animation-video" >
              <source src={reel} type="video/mp4" />
          </video>
          <div className='video-controls'>
            <button className="play-button" onClick={togglePlay}>
              {isPlaying ? <BsPauseCircleFill size={27}/> : <AiFillPlayCircle size={27}/>}
            </button>
          </div>
        </div>
      </div>

  );
};

export default VideoPlayer;
