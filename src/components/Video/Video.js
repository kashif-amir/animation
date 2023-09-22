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
  

  document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
  
    // videoContainer.addEventListener('touchstart', function() {
    //   this.classList.add('touched');
    // });
  
    videoContainer.addEventListener('touchend', function() {
      this.classList.remove('touched');
    });
  });

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay={true} loop controls={false} className="animation-video">
        <source src={reel} type="video/mp4" />
      </video>
      <div className='video-controls'>
        <button className="play-button" onClick={togglePlay}>{isPlaying ? <BsPauseCircleFill size={27}/> : <AiFillPlayCircle size={27}/>}</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
