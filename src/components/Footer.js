import "./FooterStyle.css";
import React from "react";
import { FaHome, FaMailBulk, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
      <div className="left">
  <div className="location">
    <FaHome size={20} style={{ color: "white" }} />
    <p>Varanasi</p>
  </div>
  <div className="phone">
    <FaPhone size={20} style={{ color: "white" }} />
    <p>78*******74</p>
  </div>
  <div className="email">
    <FaMailBulk size={20} style={{ color: "white" }} />
    <p>shivanshisahu88@gmail.com</p>
  </div>
</div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            I'm Shivanshi Sahu, a frontend web developer passionate about building 
            responsive and user-friendly web applications. Skilled in React, JavaScript, 
            and Node.js, I strive to create seamless digital experiences.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/shivanshi-sahu" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/Shivanshi88" 
                     target="_blank" rel="noopener noreferrer">
             <div><FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} /></div> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;