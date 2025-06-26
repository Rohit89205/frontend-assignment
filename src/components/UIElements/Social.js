import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Social = () => {
  return (
    <>
      <ul className="header-social-container">
        <li>
          <a href="https://www.facebook.com/rohityadav5159/" target="_blank" className="social-link">
            <BsFacebook />
          </a>
        </li>

        <li>
          <a href="#" target="_blank" className="social-link">
            <BsTwitter />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/rohityadav5159/" target="_blank" className="social-link">
            <BsInstagram />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/rohit89205/" target="_blank" className="social-link">
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Social;
