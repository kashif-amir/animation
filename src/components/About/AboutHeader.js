import React, { useEffect } from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { TiMail } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./AboutHeader.css";
import logo from "../../assets/image/Logo.png";
import { Link } from 'react-router-dom';

function AboutHeader() {
  const navigate = useNavigate();

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
      <nav className="navbar-flex">
        <div className="logo-container">
          <img src={logo} alt="portfolio-logo" className="logo" />
        </div>
        <ul onClick={closeMobileNav}>
        <li>
            <Link to="/#home" className="tag">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="tag">
              About
            </Link>
          </li>
          <li>
            <Link to="/#portfolio" className="tag">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/reel" className="tag">
              Reel
            </Link>
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
              <TiMail className="behance-logo" />
            </a>
          </i>
        </div>
        <div className="hamburger">
          <div className="stroke-1" />
          <div className="stroke-2" />
          <div className="stroke-3" />
        </div>
      </nav>
  );
}

export default AboutHeader;
