import React from 'react'
import '../styles/Header.css'
import { usePrintingContext } from './PrintingContext';
import { Link } from 'react-router-dom';

function Header() {
  const { handlePrint, toggleMoreContent } = usePrintingContext();

  const handlePrintClick = () => {
    toggleMoreContent('microsoft');
    toggleMoreContent('otherCompany'); 
    handlePrint();
  };

  

  return (
    <header>
      <button className="buttonGenerate" onClick={handlePrintClick}>
        Print Cv
      </button>
      
      <Link to='/formCv'>
      <button className="buttonAddCv">
        Add Cv
      </button>
      </Link>
      <h1 id="name">John Doe</h1>
      <h2 id="occupation">Instead of Product designer and UI/UX Engineer, within this h2 tag Insert what is your occupation</h2>
    </header>
  )
}

export default Header;
