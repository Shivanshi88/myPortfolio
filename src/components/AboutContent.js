import React from 'react';
import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import shivi from "../assets/shivi.jpeg"; // Ensure correct path

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Hi, I'm Shivanshi Sahu, a frontend web developer skilled in React, JavaScript, and the MERN stack. 
          I love building user-friendly web applications and continuously improving my skills.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack">
            <img src={shivi} className="img" alt="Shivanshi Sahu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
