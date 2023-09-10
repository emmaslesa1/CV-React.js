import React from 'react';
import WorkExperienceById from './WorkExperienceById'; 
import EducationById from './EducationById'; 
import AboutMeById from './AboutMeById'; 
import '../styles/Combined.css';
import { usePrintingContext } from './PrintingContext';

const CombinedById = () => {

//   const { printing } = usePrintingContext();
  return (
    <div className="combined-container">
      <div className="left-side">
        <WorkExperienceById />
        <EducationById />
      </div>
      <div className="right-side">
        <AboutMeById />
      </div>
    </div>
  );
};

export default CombinedById;
