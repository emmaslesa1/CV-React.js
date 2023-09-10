import React, {useEffect, useState} from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchCvDataById } from './CvApi';
import { useNavigate } from 'react-router-dom';

function HeaderById(props) {
  const navigate =useNavigate();

  //const { handlePrintById, toggleMoreContent } = usePrintingContextById();

  const handlePrintClickById = () => {
    window.print();
  };

  const handleBackClick = () => {
    navigate('/formCv');
  };

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
    <header>
      <button className="buttonGenerate" onClick={handlePrintClickById}>
        Print Cv
      </button>
      
      
      <button className="buttonAddCv" onClick={handleBackClick}>
        Back
      </button>
      

      <h1 id="name">{cvData.nameExp}</h1>
      <h2 id="occupation">{cvData.occupation}</h2>
    </header> : <p>No data</p>
  )
}

export default HeaderById;
