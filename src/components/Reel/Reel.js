import React, { useRef, useState, useEffect } from 'react';
import './Reel.css'; // Assuming you have a CSS file
import AboutHeader from '../About/AboutHeader';
import { BsPauseCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";
import reel from "../../assets/videos/Latest ShowReel 04 Low_1.mp4"




const ReelAnimation= () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
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

  // const handleMouseEnter = () => {
  //   console.log('mouse enter')
  //   setShowButton(true);
  // };

  // const handleMouseLeave = () => {
  //   console.log('mouse leave')
  //   setShowButton(false);
  // };

  

  const handleFullScreen = () => {
    const videoElement = videoRef.current;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      videoElement.webkitRequestFullscreen();
    } 
  };

  return (
      <div>
        <AboutHeader/>
        <div className="video-container" onClick={changeState}>
          <video  id="myVideo" ref={videoRef} autoPlay={true} loop controls={false} className="animation-video" >
              <source src="https://dkrpf5qysq7nt.cloudfront.net/Interior+and+Extrior/Latest ShowReel.mp4" type="video/mp4" />
          </video>
          <div onClick={handleFullScreen} className='full-screen'><AiOutlineFullscreen size={25}/></div>
          <div className='video-controls'>
            {
              showButton && ( <button className="play-button" onClick={togglePlay} >
              {isPlaying ? <BsPauseCircleFill size={27}/> : <AiFillPlayCircle size={27}/>}
            </button>)
            }
            
          </div>
        </div>
      </div>

  );
};

export default ReelAnimation;
