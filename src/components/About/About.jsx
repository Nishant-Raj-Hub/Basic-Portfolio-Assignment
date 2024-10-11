import React from "react";
import profilePic from "../../assets/img/profile-pic-final.jpg";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="image-container">
        <img src={profilePic}></img>
      </div>

      <div className="rightside-aboutme">
        <div className="aboutme-text">
          <div className="text1">HELLO!</div>
          <div className="text2">I AM NISHANT.</div>
          <div className="text3">DYNAMIC, USER-FRIENDLY APPS</div>
          <div className="text4">FROM FRONTEND VIBES TO BACKEND POWER.</div>
          <div className="text5">LET'S MAKE SOMETHING AWESOME!</div>
        </div>
      </div>
    </div>
  );
};

export default About;
