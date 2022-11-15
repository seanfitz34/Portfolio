import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-contianer">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://github.com/seanfitz34">
              <i className="fa fa-github"></i>
            </a>

            <a href="https://www.instagram.com/studiocitysean/">
              <i className="fa fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/seanfitzgerald34/">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Sean</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🟢",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 😎",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
