import React, { useState } from "react";
import "../About/About.css";
const About = () => {
  const [skills, setSkills] = useState(true);
  const [education, setEducation] = useState(false);
  const skillsHandler = () => {
    if (education === true) {
      // Will first hide the education
      setEducation(false);
      // And afterwards will handle skills open/close
      if (skills === false) {
        setSkills(true);
      } else {
        setSkills(false);
      }
    } else {
      if (skills === false) {
        setSkills(true);
      } else {
        setSkills(false);
      }
    }
  };
  const educationHandler = () => {
    if (skills === true) {
      // Will first hide the skills
      setSkills(false);
      // And afterwards will handle education open/close
      if (education === false) {
        setEducation(true);
      } else {
        setEducation(false);
      }
    } else {
      if (education === false) {
        setEducation(true);
      } else {
        setEducation(false);
      }
    }
  };
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="about__section">
            {/* Image */}
            <div className="about__img">
              <img src="images/armghan.jpg" alt="..." />
            </div>
            {/* About Details*/}
            <div className="about__details">
              <h1 className="aboutme__title">About Me</h1>
              <p>
                I consider handling things, with responsibility & proper
                planning, to be of a greater priority. I like to present my
                devotion, dedication, and commitment to achieving the goals
                despite the hurdles that come along the way.
              </p>
              {/* About Additionals */}
              <div className="about__extras">
                <p
                  className={`extras__headings ${
                    skills ? "active__extras" : ""
                  }`}
                  onClick={skillsHandler}
                >
                  Skills
                </p>
                <p
                  className={`extras__headings ${
                    education ? "active__extras" : ""
                  }`}
                  onClick={educationHandler}
                >
                  Education
                </p>
              </div>
              <div
                className={`extras__content ${
                  skills ? "active__content" : " "
                }`}
              >
                <ul>
                  <li>
                    <span>Photography</span>
                    <br />
                    Expert
                  </li>
                  <li>
                    <span>Photo Editor</span>
                    <br />
                    Expert
                  </li>
                  <li>
                    <span>Video Editor</span>
                    <br />
                    Expert
                  </li>
                </ul>
              </div>
              <div
                className={`extras__content ${
                  education ? "active__content" : " "
                }`}
              >
                <ul>
                  <li>
                    <span>Matriculation</span>
                    <br />
                    Al-Mustafa Higher Secondary School Fort Abbas
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      /{" "}
                    </span>
                    2015-17
                  </li>
                  <li>
                    <span>Intermediate</span>
                    <br />
                    Punjab group of colleges Fort Abbas
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      /{" "}
                    </span>
                    2017-19
                  </li>
                  <li>
                    <span>Bachelor's in Arts </span>
                    <br />
                    Government Graduate College Fortabbas
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      /{" "}
                    </span>
                    2019-21
                  </li>
                  <li>
                    <span>Master's in Film and Broadcast Media Studies</span>
                    <br />
                    University of Lahore Main Campus
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {" "}
                      /{" "}
                    </span>
                    2022-24
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
