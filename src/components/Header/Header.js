import React, { useEffect } from 'react';
import "./Header.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiBehanceLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Video from "../Video/Video";
import Bio from "../Information/Bio";
import Catergories from "../PortfolioCategory/Catergories";
import logo from "../../assets/image/Logo.png";
import './navbar.scss';

function Header() {
  const navigate = useNavigate();

  const homeIconClass = window.location.href.split('/').pop() === '#home' ? 'active' : '';
  const stakingIconClass = window.location.href.split('/').pop() === 'staking' ? 'active' : '';
  const faqIconClass = window.location.href.split('/').pop() === '#faq' ? 'active' : '';
  const teamIconClass = window.location.href.split('/').pop() === '#team' ? 'active' : '';
  const roadmapIconClass = window.location.href.split('/').pop() === '#roadmap' ? 'active' : '';

  useEffect(() => {
      const burger = document.querySelector('.hamburger');
      const navbar = document.querySelector('.navbar-flex');

      // if (document.readyState === 'complete') {
      burger?.addEventListener('click', () => {
          burger.classList?.toggle('toggle');
          navbar.classList?.toggle('navbar-mobile-flex');
      });
      // }
  }, []);

  const closeMobileNav = () => {
      const burger = document.querySelector('.hamburger');
      const navbar = document.querySelector('.navbar-flex');

      burger.classList.remove('toggle');
      navbar.classList.remove('navbar-mobile-flex');
  };

  return (
    <div id="home">
      <nav className="navbar-flex">
        <div className="logo-container">
          <img src={logo} alt="portfolio-logo" className="logo" />
        </div>
        <ul onClick={closeMobileNav}>
          <li>
            <a href="/#home" className="tag">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="tag">
              About
            </a>
          </li>
          <li>
            <a href="/#portfolio" className="tag">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/reel" className="tag">
              Reel
            </a>
          </li>
        </ul>

        <div className="social-nav-icons">
          <i>
            <a href="https://www.linkedin.com/in/hamza-ahmad-7559a2149/">
              <AiFillLinkedin className="linkdin-logo" />
            </a>
          </i>
          <i>
            <a href="https://www.instagram.com/hamza_ahmad903/">
              <AiOutlineInstagram className="instagram-logo" />
            </a>
          </i>
          <i>
            <a href="https://www.behance.net/hamzaahmad903">
              <RiBehanceLine className="behance-logo" />
            </a>
          </i>
        </div>
        <div className="hamburger">
          <div className="stroke-1" />
          <div className="stroke-2" />
          <div className="stroke-3" />
        </div>
      </nav>
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
