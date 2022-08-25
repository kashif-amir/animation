import React from "react";
import { useEffect } from "react";
import AboutHeader from "./AboutHeader";
import "./About.css";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <AboutHeader />
      </div>
      <div className="about-container">
        <img
          src="https://static.wixstatic.com/media/fc0bbd_189492e214174fb5b8a4335f6177875b~mv2.jpg/v1/fill/w_1252,h_520,al_c,q_85,enc_auto/fc0bbd_189492e214174fb5b8a4335f6177875b~mv2.jpg"
          alt="image"
          className="aboutpage-img"
        />
        <div className="about-main-div">
          <div className="about-text">
            <h2 className="about-heading-paragraph">About</h2>
            <p className="first-paragraph">
              I am a Qualified 3D artist with over 8 years of extensive
              experience in CGI for Films and Games. Over the years I had the
              privilege to work as a Lead Artist on Multiple Project like
              real-time AR and VR projects. With the Academic background in
              Visual Communication Designs and vast knowledge of 3D Art,
              Production Pipelines both for Films and Games. Experienced Team
              Lead and Game Artist with a demonstrated history of working in the
              Marketing, Advertising, and Game Industry. Skilled in many 3D & 2D
              tools i.e Unity 3D, Autodesk Maya, Pixologic Zbrush, Foundry Mari,
              Substance Painter,3ds Max, Blender, Mixamo Fuse, Adobe Photoshop,
              Adobe Illustrator, Adobe Animate, User Interface Design, Adobe
              Creative Suite, and Art.
            </p>
            <p className="second-paragraph">
              I can design any kind of parts, products, assemblies, fixtures,
              enclosures, prototypes, house 3D models, 2D and 3D floor plans,
              and much more. I provide the highest quality and maintain
              excellence level.
            </p>
            <p className="third-paragraph">
              For any information or just a quick Hi:
            </p>
            <h3>nadeemhamza903@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
