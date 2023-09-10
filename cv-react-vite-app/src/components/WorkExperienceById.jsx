import React, {useState, useEffect} from 'react';
import '../styles/Education.css'
import imgAdd from '../images/add.png';
import imgRemove from '../images/remove.png';
//import { usePrintingContext } from './PrintingContext';
import { useParams } from 'react-router-dom';
import { fetchCvDataById } from './CvApi';

export default function WorkExperienceById() {

  const [isMoreVisible, setMoreVisible] = useState({
    company: true,
  });

  //const { printing } = usePrintingContext();


const [cvData, setCvData] = useState();
  const { id } = useParams();

  useEffect(() => {
    id && 
    fetchCvDataById(id)
      .then((data) => {
        console.log('DisplayCvData: ', data);
        setCvData(data);

        // Initialize the isMoreVisible state based on the data
        const initialState = {};
        if (data?.workExperiences) {
          data.workExperiences.forEach((experience) => {
            initialState[experience.company] = true;
          });
        }
        setMoreVisible(initialState);
      
      })
      .catch((error) => {
        console.error('Error fetching CV data: ', error);
      });
  }, []); 
console.log('111: ', cvData);

 // Function to toggle the "more" section for a specific company
 const toggleMore = (company) => {
  setMoreVisible((prevState) => ({
    ...prevState,
    [company]: !prevState[company], // Toggle the state for the specific company
  }));
};




  
    // const [isMoreVisible, setMoreVisible] = useState({
    //   university: true,
    // });
  
    // const { printing } = usePrintingContext();
  
  
    // const openMore = (company) => {
    //   setMoreVisible((prevState) => ({
    //     ...prevState,
    //     [company]: true,
    //   }));
    // };
  
    // const closeMore = (company) => {
    //   setMoreVisible((prevState) => ({
    //     ...prevState,
    //     [company]: false,
    //   }));
    // };

   
    return (
        cvData ? 
    <section>

          <h3>Work Experience</h3>
          <ul>
          {cvData?.workExperiences?.map((experience, index) => (
          <li key={index}>
            <h4 className="company">
            {experience.company}
            <span id="date"> ({experience.date}) </span>
            </h4>
            <div className="toFlexButton">
            <p className="text">{experience.position}</p>
            <img
                src={isMoreVisible[experience.company] ? imgAdd : imgRemove}
                className={`img ${isMoreVisible[experience.company] ? 'expandImg' : ''}`}
                alt=""
                onClick={() => toggleMore(experience.company)}
              ></img>
             {isMoreVisible[experience.company] && <hr className="line" />}
             <div className={`more animated-element ${
                  isMoreVisible[experience.company] ? 'always-visible expandMore' : 'collapseMore'
                }`}>
              <p>
              {experience.description}
              </p>
              <hr />
            </div>
          </div>
          </li>
        ))}
      </ul>
    </section> : <p>No data</p>
    );
  }

