import React from 'react';
import '../styles/AboutMe.css'


function AboutMe() {
  return (
    <section>
      <div className="moreMobileInfo">
        <ul>
          <li className='list'>
          <h3 className="mobileTitle">Contact</h3>
            <div>
              <p className="contact" id="email"><strong>john.doe@gmail.com</strong></p>
              <p className="contact" id="phone"><strong>+123456789101112</strong></p>
            </div>
          </li>
          <li className='list'>
          <h3 className="aboutMe">About me</h3>
            <div>
              <p className="about" id="aboutMe">Tell us about yourself</p>
            </div>
          </li>
          <li className='list'>
            <div className="group" data-group="techSkills">
              <h3 className="aboutMe">Key Technical skills</h3>
              <ul className="styledList" id="techList">
                <li>React</li>
                <li>React Native</li>
                <li>Firebase</li>
                <li>Node.js</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="group" data-group="softSkills">
              <h3 className="aboutMe">Soft skills</h3>
              <ul className="styledList" id="softList">
                <li>Goal Oriented</li>
                <li>Positive Influence on the team</li>
                <li>More soft skills...</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="group" data-group="language">
              <h3 className="aboutMe">Languages</h3>
              <ul className="styledList" id="languageList">
                <li>Bosnian/Croatian/Serbian</li>
                <li>English</li>
                <li>German</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
