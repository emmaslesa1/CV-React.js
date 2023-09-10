import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { fetchCvDataById } from './CvApi';

export const DisplayCvData = (props) => {
  const [cvData, setCvData] = useState();
  const { id } = useParams();

  useEffect(() => {
    // Fetch CV data using the 'id' extracted from route parameters
    id && 
    fetchCvDataById(id)
      .then((data) => {
        console.log('DisplayCvData: ', data);
        setCvData(data);
      })
      .catch((error) => {
        console.error('Error fetching CV data: ', error);
      });
  }, []); // Re-fetch data when 'id' changes
console.log('111: ', cvData);


  return (
    cvData ? 
    <div>
      <h1>Your CV Data:</h1>
      <p>Name: {cvData.nameExp}</p>
      <p>Occupation: {cvData.occupation}</p>
      <h2>Work Experience</h2>
      <ul>
        {cvData?.workExperiences?.map((experience, index) => (
          <li key={index}>
            <p>Company: {experience.company}</p>
            <p>Date: {experience.date}</p>
            <p>Position: {experience.position}</p>
            <p>Description: {experience.description}</p>
          </li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {cvData?.educations?.map((education, index) => (
          <li key={index}>
            <p>University: {education.university}</p>
            <p>Date: {education.dateEducation}</p>
            <p>Department: {education.department}</p>
            <p>Description: {education.descriptionEducation}</p>
          </li>
        ))}
      </ul>
      <h2>Contact</h2>
      <p>Email: {cvData.email}</p>
      <p>Phone: {cvData.phone}</p>
      <h2>About Me</h2>
      <p>{cvData.aboutMe}</p>
      <h2>Key Technical Skills</h2>
      <ul>
        {cvData?.keyTechnicalSkills?.map((keyTechnicalSkill, index) => (
          <li key={index}>{keyTechnicalSkill.technicalSkill}</li>
        ))}
      </ul>
      <h2>Soft Skills</h2>
      <ul>
        {cvData?.keySoftSkills?.map((keySoftSkill, index) => (
          <li key={index}>{keySoftSkill.softSkill}</li>
        ))}
      </ul>
      <h2>Languages</h2>
      <ul>
        {cvData?.languages?.map((language, index) => (
          <li key={index}>{language.lang}</li>
        ))}
      </ul>
    </div> : <p>No data</p>
  );
}

export default DisplayCvData;
