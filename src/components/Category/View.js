import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import "./View.css";
import { useParams } from 'react-router-dom';
import character from "../../Data/character";



export default function View() {
  const [design, setDesign] = useState([])
  let { category, id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const oneCategory = character.filter((char) => {
      return char.categeory === category && char.subCategory === id
    })
    console.log(category, id);
    setDesign(oneCategory);

  }, []);

  console.log("design", design)

  return (
    <div>
      {design.slice(1).map((animate) => (
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
