import React, {useState, useEffect} from 'react';
import '../styles/AboutMe.css';
import { useParams } from 'react-router-dom';
import { fetchCvDataById } from './CvApi';


function AboutMeById() {

    const [cvData, setCvData] = useState();
    const { id } = useParams();
  
    useEffect(() => {
      id && 
      fetchCvDataById(id)
        .then((data) => {
          console.log('DisplayCvData: ', data);
          setCvData(data);
        })
        .catch((error) => {
          console.error('Error fetching CV data: ', error);
        });
    }, []);
  console.log('111: ', cvData);
    


  return (
    cvData ? 
    <section>
      <div className="moreMobileInfo">
        <ul>
          <li className='list'>
          <h3 className="mobileTitle">Contact</h3>
            <div>
              <p className="contact" id="email"><strong>{cvData.email}</strong></p>
              <p className="contact" id="phone"><strong>{cvData.phone}</strong></p>
            </div>
          </li>
          <li className='list'>
          <h3 className="aboutMe">About me</h3>
            <div>
              <p className="about" id="aboutMe">{cvData.aboutMe}</p>
            </div>
          </li>
          <li className='list'>
            <div className="group" data-group="techSkills">
              <h3 className="aboutMe">Key Technical skills</h3>
              <ul className="styledList" id="techList">
              {cvData?.keyTechnicalSkills?.map((keyTechnicalSkill, index) => (
          <li key={index}>{keyTechnicalSkill.technicalSkill}</li>
        ))}
              </ul>
            </div>
          </li>
          <li>
            <div className="group" data-group="softSkills">
              <h3 className="aboutMe">Soft skills</h3>
              <ul className="styledList" id="softList">
              {cvData?.keySoftSkills?.map((keySoftSkill, index) => (
          <li key={index}>{keySoftSkill.softSkill}</li>
        ))}
              </ul>
            </div>
          </li>
          <li>
            <div className="group" data-group="language">
              <h3 className="aboutMe">Languages</h3>
              <ul className="styledList" id="languageList">
              {cvData?.languages?.map((language, index) => (
          <li key={index}>{language.lang}</li>
        ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section> : <p>No data</p>
  );
}

export default AboutMeById;

