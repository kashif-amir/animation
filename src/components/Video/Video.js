import React, { useRef, useEffect, useState } from 'react';
import "./Video.css";
import reel from "../../assets/videos/Latest ShowReel 04 Low_1.mp4"
import { BsPauseCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";


const VideoPlayer = () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [showButton, setShowButton] = useState(true);

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
  

  useEffect(() => {
    const video = document.getElementById('myVideo');

    const handlePlay = () => {
      setShowButton(false);
    };

    const handlePause = () => {
      setShowButton(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const changeState = () => {
    setShowButton(true);
    // if (isPlaying) {
    //   video.pause();
    // }
    // // else {
    // //   video.play();
    // // }
    // setIsPlaying(!isPlaying)
  }

  const handleFullScreen = () => {
    const videoElement = videoRef.current;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      videoElement.webkitRequestFullscreen();
    } 
  };

  return (
    <div className="video-container" onClick={changeState}>
      <video id='myVideo' ref={videoRef} autoPlay={true} loop controls={false} className="animation-video">
        <source src="https://dkrpf5qysq7nt.cloudfront.net/Interior+and+Extrior/Latest ShowReel.mp4" type="video/mp4" />
      </video>
      <div onClick={handleFullScreen} className='full-screen'><AiOutlineFullscreen size={25}/></div>
      <div className='video-controls'>
        {
          showButton && ( 
          <button className="play-button" onClick={togglePlay} >
            {isPlaying ? <BsPauseCircleFill size={27}/> : <AiFillPlayCircle size={27}/>}
          </button>)
        }
      </div>
    </div>
  );
};

export default VideoPlayer;
