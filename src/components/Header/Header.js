import React from "react";
import "./Header.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiBehanceLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Video from "../Video/Video";
import Bio from "../Information/Bio";
import Catergories from "../PortfolioCategory/Catergories";
import logo from "../../assets/image/Logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div id="home">
      <div className="header-container">
        <div className="wrapper-portfolio-logo">
          <img src={logo} alt="portfolio-logo" className="portfolio-logo" />
        </div>
        <div className="header-content">
          <h2>
            <a href="/#home" className="tag">
              Home
            </a>
          </h2>
          <h2 className="tag" onClick={() => navigate("/about")}>
            About
          </h2>
          <h2>
            <a href="/#portfolio" className="tag">
              Portfolio
            </a>
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
            <a href="https://www.behance.net/hamzaahmad903">
              <RiBehanceLine className="behance-logo" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <Video />
      </div>
      <div>
        <Bio />
      </div>
      <div>
        <div id="portfolio">
          <Catergories />
        </div>
      </div>
    </div>
  );
}

export default Header;
