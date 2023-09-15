import React, { useRef, useEffect, useState } from 'react';
import "./Video.css";
import reel from "../../assets/videos/Latest ShowReel 04 Low_1.mp4"
import { BsPauseCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";





const VideoPlayer = () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75]
    };

    const video = videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    const handleScroll = () => {
      setIsPlaying(false);
      video.pause();
      window.removeEventListener('scroll', handleScroll, options);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop controls className="animation-video">
        <source src={reel} type="video/mp4" />
      </video>
      <button className="play-button" onClick={togglePlay}>{isPlaying ? <BsPauseCircleFill size={25}/> : <AiFillPlayCircle size={25}/>}</button>
    </div>
  );
};

export default VideoPlayer;
