// Header.jsx
import React from 'react'
import '../styles/Header.css'
import { usePrintingContext } from './PrintingContext';

function Header() {
  const { handlePrint, toggleMoreContent } = usePrintingContext();

  const handlePrintClick = () => {
    // Toggle 'more' visibility before printing
    toggleMoreContent('microsoft'); // Toggle for Microsoft, you can adapt this as needed
    toggleMoreContent('otherCompany'); // Toggle for Other company, you can adapt this as needed
    handlePrint();
  };

  return (
    <header>
      <button className="buttonGenerate" onClick={handlePrintClick}>
        Print Cv
      </button>
      <h1 id="name">John Doe</h1>
      <h2 id="occupation">Instead of Product designer and UI/UX Engineer, within this h2 tag Insert what is your occupation</h2>
    </header>
  )
}

export default Header;
