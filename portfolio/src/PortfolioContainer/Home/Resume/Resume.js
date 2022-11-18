import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container" id="#resume">
      <div className="resume-content">
        <div className="heading-content">
          <div className="screen-heading"></div>
          <div className="screen-sub-heading"></div>
          <div className="heading-seperator"></div>
        </div>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullets-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="bullet selected-bullet"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">
            <div className="resume-details-carousal"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
