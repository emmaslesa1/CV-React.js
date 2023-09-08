import React, {useState} from 'react';
import '../styles/Education.css'
import imgAdd from '../images/add.png';
import imgRemove from '../images/remove.png';
import { usePrintingContext } from './PrintingContext';


function Education() {
  const [isMoreVisible, setMoreVisible] = useState({
    university: true,
  });

  const { printing } = usePrintingContext();

  const toggleMore = (company) => {
    setMoreVisible((prevState) => ({
      ...prevState,
      [company]: !prevState[company],
    }));
  };

  const showMore = (company) => {
    setMoreVisible((prevState) => ({
      ...prevState,
      [company]: true,
    }));
  };

  const hideMore = (company) => {
    setMoreVisible((prevState) => ({
      ...prevState,
      [company]: false,
    }));
  }

  // Function to open the "more" content
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

  const handlePrint = () => {
    // Open the "more" content for all sections
    openMore('university');
    // Trigger the print action
    window.print();
  };
  return (
    <section>
      <ul>
        <li>
        <h3>Education</h3>
          <div>
            <h4 className="company">MIT University in United States <span id="date">(2013 - 2015)</span></h4>
            <div className="toFlexButton">
              <p className="text">Graphic and multimedia design</p>
              <img
              src={isMoreVisible.university ? imgAdd : imgRemove}
              className="img"
              alt=""
              onClick={() => {
                // Toggle the "more" content when clicking the image
                if (!isMoreVisible.university) {
                  openMore('university');
                } else {
                  closeMore('university');
                }
              }}
            ></img>
            </div>
            {isMoreVisible.university && !printing && <hr className="line" />}
            <div
            className={`more animated-element ${
              isMoreVisible.university ? 'fadeIn always-visible' : ''
            }`}
          >
              <div className="deleteLine">
                <p>Details about education...</p>
                <hr />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Education;
