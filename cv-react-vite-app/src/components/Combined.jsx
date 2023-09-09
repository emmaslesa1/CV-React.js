import React from 'react';
import WorkExperience from './WorkExperience'; 
import Education from './Education'; 
import AboutMe from './AboutMe'; 
import '../styles/Combined.css';
import { usePrintingContext } from './PrintingContext';

const Combined = () => {

  const { printing } = usePrintingContext();
  return (
    <div className="combined-container">
      <div className="left-side">
        <WorkExperience isPrinting={printing} />
        <Education />
      </div>
      <div className="right-side">
        <AboutMe />
      </div>
    </div>
  );
};

export default Combined;
