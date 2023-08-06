import React from "react";
import "../Tech/Tech.css";
const Tech = () => {
  return (
    <>
      <div className="style__div"></div>
      <div id="tech">
        <div className="container">
          <h1 className="tech__title">Tech. & Expertise</h1>
          <div className="container__skill">
            <div className="skill__box">
              <div className="skill__title">
                <div className="skill__img">
                  <img
                    src="images/photoshop.svg"
                    className="skill__icon"
                    alt="..."
                  />
                </div>
                <h3>Adobe Photoshop</h3>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill__box">
              <div className="skill__title">
                <div className="skill__img">
                  <img
                    src="images/premiere.svg"
                    className="skill__icon"
                    alt="..."
                  />
                </div>
                <h3>Adobe Premiere Pro</h3>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill__box">
              <div className="skill__title">
                <div className="skill__img">
                  <img
                    src="images/lightroom.svg"
                    className="skill__icon"
                    alt="..."
                  />
                </div>
                <h3>Lightroom CC</h3>
              </div>
              <p>Intermediate</p>
            </div>
            <div className="skill__box">
              <div className="skill__title">
                <div className="skill__img">
                  <img
                    src="images/snapspeed.svg"
                    className="skill__icon"
                    alt="..."
                  />
                </div>
                <h3>Snapseed</h3>
              </div>
              <p>Advanced</p>
            </div>
            <div className="skill__box">
              <div className="skill__title">
                <div className="skill__img">
                  <img
                    src="images/resolve.svg"
                    className="skill__icon"
                    alt="..."
                  />
                </div>
                <h3>DaVinci Resolve</h3>
              </div>
              <p>Beginner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
