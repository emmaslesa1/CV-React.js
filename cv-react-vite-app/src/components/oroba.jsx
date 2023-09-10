import React from 'react';

function DisplayCvData({ cvData }) {

    if (!cvData) {
        return <p>No CV data to display.</p>;
      }

  return (
    <div>
  
          <h1>Your CV Data:</h1>
          <p>Name: {cvData.name}</p>
          <p>Occupation: {cvData.occupation}</p>
          <h2>Work Experience</h2>
          <ul>
            {cvData.workExperiences.map((experience, index) => (
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
            {cvData.educations.map((education, index) => (
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
            {cvData.keyTechnicalSkills.map((keyTechnicalSkill, index) => (
              <li key={index}>{keyTechnicalSkill.technicalSkill}</li>
            ))}
          </ul>
          <h2>Soft Skills</h2>
          <ul>
            {cvData.keySoftSkills.map((keySoftSkill, index) => (
              <li key={index}>{keySoftSkill.softSkill}</li>
            ))}
          </ul>
          <h2>Languages</h2>
          <ul>
            {cvData.languages.map((language, index) => (
              <li key={index}>{language.lang}</li>
            ))}
          </ul>
        </div>
  );
}

export default DisplayCvData;
