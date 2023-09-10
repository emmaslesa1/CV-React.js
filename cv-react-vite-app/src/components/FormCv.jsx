import React, { useEffect, useState } from 'react';
import '../styles/FormCv.css';
import { collection, getDocs, addDoc, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import DisplayCvData from './DisplayCvData';
import { createCvData, fetchCvData, updateCvData, deleteCvData } from './CvApi';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { fetchCvDataById } from './CvApi';


function FormCv() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cv, setCv] = useState([]);


const [cvDisplayData, setCvDisplayData] = useState([]);
const [isDataSubmitted, setIsDataSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    nameExp: '',
    occupation: '',
    workExperiences: [{ company: '', date: '', position: '', description: '' }],
    educations: [{ university: '', dateEducation: '', department: '', descriptionEducation: '' }],
    email: '',
    phone: '',
    aboutMe: '',
    keyTechnicalSkills: [{ technicalSkill: '' }],
    keySoftSkills: [{ softSkill: '' }],
    languages: [{ lang: '' }],
  });


  // Fetch CV data on component mount
useEffect(() => {
  fetchCvData().then((data) => {
    console.log('Fetch Cv Data: ', data);
    // Set the retrieved CV data to the state
    setCvDisplayData(data);
  });
}, []);

  const handleChangeWorkExerience = (e, index) => {
    const { name, value } = e.target;
    const updatedWorkExperiences = [...formData.workExperiences];
    updatedWorkExperiences[index][name] = value;

    setFormData({ ...formData, workExperiences: updatedWorkExperiences});
  };

  const handleChangeEducation = (e, index) => {
    const { name, value } = e.target;
    const updatedEducations = [...formData.educations];
    updatedEducations[index][name] = value;
    setFormData({ ...formData, educations: updatedEducations});
  };

  const handleChangeTechnicalSkill = (e, index) => {
    const { name, value } = e.target;
    const updatedKeyTechnicalSkills = [...formData.keyTechnicalSkills];
    updatedKeyTechnicalSkills[index][name] = value;
    setFormData({ ...formData, keyTechnicalSkills: updatedKeyTechnicalSkills});

  }

  const handleChangeSoftSkill = (e, index) => {
    const { name, value } = e.target;
    const updatedKeySoftSkills = [...formData.keySoftSkills];
    updatedKeySoftSkills[index][name] = value;
    setFormData({ ...formData, keySoftSkills: updatedKeySoftSkills});

  }

  const handleChangeLanguage = (e, index) => {
    const { name, value } = e.target;
    const updatedLanguage = [...formData.languages];
    updatedLanguage[index][name] = value;
    setFormData({ ...formData, languages: updatedLanguage});

  }

  const handleAddWorkExperience = () => {
    setFormData({
      ...formData,
      workExperiences: [...formData.workExperiences, { company: '', date: '', position: '', description: '' }],
    });
  };

  const handleRemoveWorkExperience = (index) => {
    const updatedWorkExperiences = [...formData.workExperiences];
    updatedWorkExperiences.splice(index, 1);
    setFormData({ ...formData, workExperiences: updatedWorkExperiences });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      educations: [...formData.educations, { university: '', dateEducation: '', department: '', descriptionEducation: '' }]
    });
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = [...formData.educations];
    updatedEducations.splice(index, 1);
    setFormData({ ...formData, educations: updatedEducations });
  };

  const handleAddTechnicalSkill = () => {
    setFormData({
      ...formData,
      keyTechnicalSkills: [...formData.keyTechnicalSkills, { technicalSkill: ''}],
    });
  };

  const handleRemoveTechnicalSkill = (index) => {
    const updatedKeyTechnicalSkills = [...formData.keyTechnicalSkills];
    updatedKeyTechnicalSkills.splice(index, 1);
    setFormData({ ...formData, keyTechnicalSkills: updatedKeyTechnicalSkills });
  };

  const handleAddSoftSkill = () => {
    setFormData({
      ...formData,
      keySoftSkills: [...formData.keySoftSkills, { softSkill: ''}],
    });
  };

  const handleRemoveSoftSkill = (index) => {
    const updatedKeySoftSkills = [...formData.keySoftSkills];
    updatedKeySoftSkills.splice(index, 1);
    setFormData({ ...formData, keySoftSkills: updatedKeySoftSkills });
  };

  const handleAddLanguage = () => {
    setFormData({
      ...formData,
      languages: [...formData.languages, { lang: ''}],
    });
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguage = [...formData.languages];
    updatedLanguage.splice(index, 1);
    setFormData({ ...formData, languages: updatedLanguage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cvData = {
      nameExp: formData.nameExp,
      occupation: formData.occupation,
      workExperiences: [...formData.workExperiences],
      educations: [...formData.educations],
      email: formData.email,
      phone: formData.phone,
      aboutMe: formData.aboutMe,
      keyTechnicalSkills: [...formData.keyTechnicalSkills],
      keySoftSkills: [...formData.keySoftSkills],
      languages: [...formData.languages],
    };



  try {

    const cvDocumentId = await createCvData(cvData);

    const cvDocumentRef = doc(db, 'cv', cvDocumentId);
    const docSnapshot = await getDoc(cvDocumentRef);

    if (docSnapshot.exists()) {
      const updatedCvData = docSnapshot.data();
      console.log('Updated CV data:', updatedCvData);
      setCvDisplayData(updatedCvData);
      setIsDataSubmitted(true);
      navigate(`/${cvDocumentId}`);
    } else {
      console.error('CV data not found after submission');
    }
  } catch (error) {
    console.error('Error submitting CV data: ', error);
  }

  };

  if(isDataSubmitted){
    return <DisplayCvData cvData={cvDisplayData} />

  }
  else{

  return (
    <div className='container'>
      <h1 className='form'>CV Form</h1>
      <form onSubmit={handleSubmit} className='formContainer'>
        <label className='label'>
          Name:
          <input className='input' type="text" name="nameExp" value={formData.nameExp} onChange={(e) => setFormData({ ...formData, nameExp: e.target.value })} />
        </label>
        <br />
        <label className='label'>
          Occupation:
          <input
          className='input'
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          />
        </label>
        <br />
        <h2 className='nameLabel'>Work Experience</h2>
        {formData.workExperiences.map((experience, index) => (
          <div key={index}>
            <label className='label'>
              Company:
              <input
              className='input'
                type="text"
                name="company"
                value={experience.company}
                onChange={(e) => handleChangeWorkExerience(e, index)}
              />
            </label>
            <label className='label'>
              Date:
              <input className='input' type="text" name="date" value={experience.date} onChange={(e) => handleChangeWorkExerience(e, index)} />
            </label>
            <label className='label'>
              Position:
              <input
              className='input'
                type="text"
                name="position"
                value={experience.position}
                onChange={(e) => handleChangeWorkExerience(e, index)}
              />
            </label>
            <label className='label'>
              Description:
              <textarea
              className='input'
                name="description"
                value={experience.description}
                onChange={(e) => handleChangeWorkExerience(e, index)}
              />
            </label>
            {index > 0 && (
              <button className='btn' type="button" onClick={() => handleRemoveWorkExperience(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button className='btn' type="button" onClick={handleAddWorkExperience}>
          Add Work Experience
        </button>
        <br />

        <br />
        <h2 className='nameLabel'>Education</h2>
        {formData.educations.map((education, index) => (
          <div key={index}>
            <label className='label'>
              University:
              <input
              className='input'
                type="text"
                name="university"
                value={education.university}
                onChange={(e) => handleChangeEducation(e, index)}
              />
            </label>
            <label className='label'>
              Date:
              <input className='input' type="text" name="dateEducation" value={education.dateEducation} onChange={(e) => handleChangeEducation(e, index)} />
            </label>
            <label className='label'>
              Department:
              <input
              className='input'
                type="text"
                name="department"
                value={education.department}
                onChange={(e) => handleChangeEducation(e, index)}
              />
            </label>
            <label className='label'>
              Description:
              <textarea
              className='input'
                name="descriptionEducation"
                value={education.descriptionEducation}
                onChange={(e) => handleChangeEducation(e, index)}
              />
            </label>
            {index > 0 && (
              <button className='btn' type="button" onClick={() => handleRemoveEducation(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button className='btn' type="button" onClick={handleAddEducation}>
          Add Education
        </button>
              <br />
              <br />
        <h2 className='nameLabel'>Contact</h2>
        <label className='label'>
          Email:
          <input
          className='input'
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          </label>
          Phone:
          <label className='label'>
          <input
          className='input'
            type="number"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          </label>
          <br />
          <h2 className='nameLabel'>About Me</h2>
          <label className='label'> 
            <textarea
            className='input'
              name='aboutMe'
              value={formData.aboutMe}
              onChange={(e) => setFormData({ ...formData, aboutMe: e.target.value })}
            />
          </label>
          <br />
        <h2 className='nameLabel'>Key Technical Skills</h2>
        <ul>
        {formData.keyTechnicalSkills.map((keyTechnicalSkill, index) => (
          <li key={index}>
            <label className='label'>
              <input
              className='input'
                type="text"
                name="technicalSkill"
                value={keyTechnicalSkill.technicalSkill}
                onChange={(e) => handleChangeTechnicalSkill(e, index)}
              />
            </label>
            {index > 0 && (
              <button className='btn' type="button" onClick={() => handleRemoveTechnicalSkill(index)}>
                Remove Technical Skill
              </button>
            )}
          </li>
        ))}
        </ul>
        <button className='btn' type="button" onClick={handleAddTechnicalSkill}>
          Add Technical Skill
        </button>
        <br />
        <h2 className='nameLabel'>Soft Skills</h2>
        <ul>
        {formData.keySoftSkills.map((keySoftSkill, index) => (
          <li key={index}>
            <label className='label'>
              <input
              className='input'
                type="text"
                name="softSkill"
                value={keySoftSkill.softSkill}
                onChange={(e) => handleChangeSoftSkill(e, index)}
              />
            </label>
            {index > 0 && (
              <button className='btn' type="button" onClick={() => handleRemoveSoftSkill(index)}>
                Remove Soft Skill
              </button>
            )}
          </li>
        ))}
        </ul>
        <button className='btn' type="button" onClick={handleAddSoftSkill}>
          Add Soft Skill
        </button>
        <br />
        <h2 className='nameLabel'>Languages</h2>
        <ul>
        {formData.languages.map((language, index) => (
          <li key={index}>
            <label className='label'>
              <input
              className='input'
                type="text"
                name="lang"
                value={language.lang}
                onChange={(e) => handleChangeLanguage(e, index)}
              />
            </label>
            {index > 0 && (
              <button className='btn' type="button" onClick={() => handleRemoveLanguage(index)}>
                Remove Language
              </button>
            )}
          </li>
        ))}
        </ul>
        <button className='btn' type="button" onClick={handleAddLanguage}>
          Add Language
        </button>
        <br />
        
        <button className='btn' type="submit">Submit</button>
       
      </form>
   

    </div>
  );
            }
}

export default FormCv;
