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
          alt="about"
          className="aboutpage-img"
        />
        <div className="about-main-div">
          <div className="about-text">
            <h2 className="about-heading-paragraph">About</h2>
            <p className="first-paragraph">
              Crafting Unforgettable Gaming Adventures
              At Neckla, we don't just make games; we create immersive journeys that players will treasure for years to come. As a dynamic Game Design Studio and Advertising Agency in London, our commitment to detail and storytelling ensures that our games leave a lasting impact in the gaming world.
            </p>
            <p className="second-paragraph">
              Fostering Creative Freedom
              Innovation thrives when creativity is given room to flourish. At Neckla, we empower our brilliant team to unleash their creative potential. We provide them with the freedom and support they need to think big, resulting in games that redefine the boundaries of imagination.
            </p>
            <p className="third-paragraph">
              A Pledge to Excellence
              Quality is at the heart of everything we do. We meticulously craft every detail, aiming for authenticity and precision in all our projects. This unwavering dedication sets us apart and guarantees that our games are nothing less than perfect.
            </p>
            <p className="third-paragraph">
              Building on Trust and Teamwork
              Trust and respect form the cornerstone of our teamwork. We empower every team member to excel, cultivating an environment where every voice is valued, and every contribution matters.
            </p>
            <p className="third-paragraph">
              A Passion for Quality and Precision
              Quality is the foundation of our creations. We tirelessly pursue authenticity and precision in every facet of our work, from the tiniest element to the grandest project. This unwavering commitment to quality sets us apart and ensures that our games are nothing short of perfection.
            </p>  
            <h3>nadeemhamza903@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
