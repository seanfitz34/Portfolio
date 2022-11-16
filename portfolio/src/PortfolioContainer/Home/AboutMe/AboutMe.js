import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container" id="about">
      <div className="about-me-parent">
        <div className="heading-container">
          {" "}
          <h2>About Me</h2>
          <p>Why Choose Me?</p>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Full stack web developer with background knowledge of MERN stacks
              with redux, along with a knack of building applications with
              utmost efficiency. Strong professional willing to be an asset for
              an organization.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div className="highlight">
                <li className="highlight-blob">
                  <span>Full Stack web development</span>
                </li>
              </div>
              <div className="highlight">
                <li className="highlight-blob">
                  <span>Interactive Front End design</span>
                </li>
              </div>

              <div className="highlight">
                <li className="highlight-blob">
                  <span>React and React Native</span>
                </li>
              </div>
              <div className="highlight">
                <li className="highlight-blob">
                  <span>Redux </span>
                </li>
              </div>

              <div className="highlight">
                <li className="highlight-blob">
                  <span>Managing database</span>
                </li>
              </div>
            </div>

            <div className="about-me-options"></div>
          </div>
          <div className="about-me-picture">
              <div className="about-me-picture-background"></div>
            </div>
          <div className="about-me-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="seanResume.pdf" download="Sean seanResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
