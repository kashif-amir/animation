import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiMail } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./AboutHeader.css";
import logo from "../../assets/image/Logo.png";

function AboutHeader() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="wrapper-portfolio-logo">
        <img src={logo} alt="portfolio-logo" className="portfolio-logo" />
      </div>
      <div className="header-content">
        <h2 className="tag" onClick={() => navigate("/")}>
          Home
        </h2>
        <h2 className="tag" onClick={() => navigate("/about")}>
          About
        </h2>
        <h2 className="tag" onClick={() => navigate("/about")}>
          Portfolio
        </h2>
        <div>
          <a href="https://www.linkedin.com/in/hamza-ahmad-7559a2149/">
            <AiFillLinkedin className="linkdin-logo" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/hamza_ahmad903/">
            <AiOutlineInstagram className="instagram-logo" />
          </a>
        </div>

        <div>
          <a href="nadeemhamza903@gmail.com">
            <TiMail className="mail-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
