import React from "react";
import "./About.css";
import about_profile from "../assets/about_profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about_title">
        <h1>About me</h1>        
      <div className="about_section">
     
       <div className="about_left">
          <div className="about_para">
            <p>
              I am an experienced react developer and have handon practice of
              using this library. I have made many practice projects using
              react.
            </p>
          </div>
          <div className="about_skills">
            <div className="about_skill">
              <p>HTML&CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about_skill">
              <p>ReactJS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about_skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
        <div className="about_right">
       <img src={about_profile} width={"300px"} alt="Profile_image" />
       </div>

      </div>
      </div>
      <div className="about_achievements">
        
      </div>
    </div>
  );
};

export default About;
