import React, { useState } from 'react';
import '../styles/WorkExperience.css';
import imgAdd from '../images/add.png';
import imgRemove from '../images/remove.png';
import { usePrintingContext } from './PrintingContext';

function WorkExperience() {
  const [isMoreVisible, setMoreVisible] = useState({
    microsoft: true,
    otherCompany: true,
  });

  const { printing } = usePrintingContext();

  const openMore = (company) => {
    setMoreVisible((prevState) => ({
      ...prevState,
      [company]: true,
    }));
  };

  const closeMore = (company) => {
    setMoreVisible((prevState) => ({
      ...prevState,
      [company]: false,
    }));
  };


  return (
    <section>
      <ul>
        <li className={printing ? openMore('microsoft') : ''}>
          <h3>Work experience</h3>
          <h4 className="company">
            <strong>Microsoft </strong>
            <span id="date">( 2020 - present )</span>
          </h4>
          <div className="toFlexButton">
            <p className="text">Ceo, Product owner & Tech Lead</p>
            <img
              src={isMoreVisible.microsoft ? imgAdd : imgRemove}
              className={`img ${isMoreVisible.microsoft ? 'expandImg' : ''}`}
              alt=""
              onClick={() => {
                if (!isMoreVisible.microsoft) {
                  openMore('microsoft');
                } else {
                  closeMore('microsoft');
                }
              }}
            ></img>
          </div>
          {isMoreVisible.microsoft && !printing && <hr className="line" />}
                      <div className={`more animated-element ${
              isMoreVisible.microsoft ? 'always-visible expandMore' : 'collapseMore'
            }`}>
              <p>
                Details about your position
                <br />
                <span>some more details...</span>
                <br />
                List of projects:
                <br />
                <span>- Resume website ( you are currently on this website, it was built in 3 days )</span>
                <br />
                <span>- <a href="http://link.net">Project</a></span>
                <br />
                <br />
                <br />
                <span>Some of the challenges I had to overcome:</span>
                <br />
                <span>- Implement it in react</span>
                <span>- Figure out firebase</span>
              </p>
              <hr />
            </div>
        
        </li>
        <li className={printing ? openMore('otherCompany') : ''}>
          <h4 className="company">
            <strong>Other company </strong>
            <span id="date">( 2020 - 2021 )</span>
          </h4>
          <div className="toFlexButton">
            <p className="text">Consultant and Full Stack Developer</p>
            <img
              src={isMoreVisible.otherCompany ? imgAdd : imgRemove}
              className={`img ${isMoreVisible.otherCompany ? 'expandImg' : ''}`}
              alt=""
              onClick={() => {
                if (!isMoreVisible.otherCompany) {
                  openMore('otherCompany');
                } else {
                  closeMore('otherCompany');
                }
              }}
            ></img>
          </div>
          {isMoreVisible.otherCompany && !printing && <hr className="line" />}
          <div
            className={`more animated-element ${
              isMoreVisible.otherCompany ? 'always-visible expandMore' : 'collapseMore'
            }`}
          >
            <div className="deleteLine">
              <p>
                Details about your position
                <br />
                <span>some more details...</span>
                <br />
                List of projects:
                <br />
                <span>- Resume website ( you are currently on this website, it was built in 3 days )</span>
                <br />
                <span>- <a href="http://link.net">Project</a></span>
                <br />
                <br />
                <br />
                <span>Some of the challenges I had to overcome:</span>
                <br />
                <span>- Implement it in react</span>
                <span>- Figure out firebase</span>
              </p>
              <hr />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default WorkExperience;
