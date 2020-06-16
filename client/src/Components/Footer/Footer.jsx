import React, { Component } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer-container">
        <div className='footer-container'>
          <div className='footer-icons'>
          <FaGithubSquare className="footer-github-icon" />
          <FaLinkedin className="footer-linkedin-icon" />
          <p className="footer-text">Daehyun Choi, 2020</p></div>
        </div>
      </div>
    );
  }
}
