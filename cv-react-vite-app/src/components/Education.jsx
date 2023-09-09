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

  return (
    <section>
      <ul>
        <li className={printing ? openMore('university') : ''}>
        <h3>Education</h3>
          <div>
            <h4 className="company">MIT University in United States <span id="date">(2013 - 2015)</span></h4>
            <div className="toFlexButton">
              <p className="text">Graphic and multimedia design</p>
              <img
              src={isMoreVisible.university ? imgAdd : imgRemove}
              className={`img ${isMoreVisible.university ? 'expandImg' : ''}`}
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
            <div className={`more animated-element ${
              isMoreVisible.university ? 'always-visible expandMore' : 'collapseMore'
            }`}>
              
                <p>Details about education...</p>
                <hr />
              </div>
            </div>
          
        </li>
      </ul>
    </section>
  );
}

export default Education;
