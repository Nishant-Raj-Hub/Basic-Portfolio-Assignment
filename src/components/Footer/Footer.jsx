import React from "react";
import "./Footer.css";
import assignmentLogo from "../../assets/img/assignment.png";
import github from "../../assets/img/github-mark-white.svg";
import instagram from "../../assets/img/instagram.svg";
import linkedin from "../../assets/img/linkedin.svg";
import copyrightWhite from "../../assets/img/copyrightWhite.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footerDiv">
        <img id="logo" src={assignmentLogo} alt="logo" />
        <div id="quote">
          <h1>Example Footer</h1>
          <h1>WAMessager</h1>
        </div>  
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/nishant-raj-aa78241aa/"
            target="_blank"
          >
            <img src={linkedin} alt="Icon" />
          </a>
          <a href="https://github.com/Nishant-Raj-Hub" target="_blank">
            <img src={github} alt="Icon" />
          </a>
          <a href="https://www.instagram.com/noddy.7x/" target="_blank">
            <img src={instagram} alt="Icon" />
          </a>
        </div>

        <p>
          Made by Nishant{" "}
          <img id="copyrightImg" src={copyrightWhite} alt="copyright" /> 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
