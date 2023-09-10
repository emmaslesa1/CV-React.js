import React, {useState, useEffect} from 'react';
import '../styles/Education.css'
import imgAdd from '../images/add.png';
import imgRemove from '../images/remove.png';
//import { usePrintingContext } from './PrintingContext';
import { useParams } from 'react-router-dom';
import { fetchCvDataById } from './CvApi';

export default function EducationById() {

  const [isMoreVisible, setMoreVisible] = useState({
    university: true,
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
        if (data?.educations) {
          data.educations.forEach((education) => {
            initialState[education.university] = true;
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
 const toggleMore = (university) => {
  setMoreVisible((prevState) => ({
    ...prevState,
    [university]: !prevState[university], // Toggle the state for the specific company
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

          <h3>Education</h3>
          <ul>
          {cvData?.educations?.map((education, index) => (
          <li key={index}>
            <h4 className="company">
            {education.university}
            <span id="date"> ({education.dateEducation}) </span>
            </h4>
            <div className="toFlexButton">
            <p className="text">{education.department}</p>
            <img
                src={isMoreVisible[education.university] ? imgAdd : imgRemove}
                className={`img ${isMoreVisible[education.university] ? 'expandImg' : ''}`}
                alt=""
                onClick={() => toggleMore(education.university)}
              ></img>
             {isMoreVisible[education.university] && <hr className="line" />}
             <div className={`more animated-element ${
                  isMoreVisible[education.university] ? 'always-visible expandMore' : 'collapseMore'
                }`}>
              <p>
              {education.descriptionEducation}
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

