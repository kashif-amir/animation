import React from "react";
import "./Bio.css";
import personImage from "../../assets/image/personhamza.png";

function Bio() {
  return (
    <div className="bio-container">
      <div className="column-1">
        <img src={personImage} alt="working-person" className="personal-img" />
      </div>
      <div className="column-2">
        <h1 className="bio-heading">MY BIO</h1>
        <p className="bio-information">
          I'm Hamza Ahmad located in Pakistan. I have been working as a 3D
          Generalist for 8 years and have a well-rounded skill set in Modeling,
          Texturing, Rigging and Animation and honed talents in creating
          storyboards and designing graphics. Further, I am a recognized expert
          in story development, planning, critical thinking and a communicative
          collaborator. Over the years I had the privilege to work as a lead
          Artist on animated characters and recently I have been working as an
          artist on multiple real-time AR and VR projects with an academic
          background in Visual Communication Design. I have a broad experience
          and knowledge of production pipelines both for Films and Games.
        </p>
      </div>
    </div>
  );
}

export default Bio;
