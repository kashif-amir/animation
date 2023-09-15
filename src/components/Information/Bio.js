import React from "react";
import "./Bio.css";
import personImage from "../../assets/image/Profile_Pic_01.png";

function Bio() {
  return (
    <div className="bio-container">
      <div className="column-1">
        <img src={personImage} alt="working-person" className="personal-img" />
      </div>
      <div className="column-2">
        <h1 className="bio-heading">MY BIO</h1>
        <p className="bio-information">
          Greetings! I'm Hamza Ahmad, a dedicated 3D Game Designer based in London. I possess a remarkable proficiency in transforming digital pixels into captivating virtual worlds that bring gaming fantasies to life. With a strong passion for creating immersive environments, I skilfully blend creative ideas with advanced technology. I've been on this journey for 8 years, crafting game elements, exciting gaming experience and bringing stories to life with 3D characters. I bring a wide array of skills to the table, from 3D modelling to lighting design, and creating engaging gameplays. I'm skilled at crafting detailed 3D backgrounds and designing game levels with exciting challenges. I also excel at designing user-friendly game interfaces to enhance player engagement. I aim to create excitement in players and ignite their imagination. Let's work together to take your gaming experience to new heights of thrill and enjoyment!
        </p>
      </div>
    </div>
  );
}

export default Bio;
