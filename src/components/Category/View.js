import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import "./View.css";

export default function View() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contextvalue = useContext(UserContext);

  return (
    <div>
      {contextvalue.animation.slice(1).map((animate) => (
        <div>
          <div>
            {animate.image && (
              <img className="view-photo" src={animate.image.src} alt="large" />
            )}
          </div>
          <div>
            {animate.video && (
              <video loop autoPlay className="inner-videos">
                <source src={animate?.video.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
