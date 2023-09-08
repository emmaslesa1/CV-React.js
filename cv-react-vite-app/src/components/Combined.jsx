// Combined.js

import React from 'react';
import WorkExperience from './WorkExperience'; // Import WorkExperience component
import Education from './Education'; // Import Education component
import AboutMe from './AboutMe'; // Import AboutMe component
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
