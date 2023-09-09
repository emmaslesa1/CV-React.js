import React, { createContext, useContext, useState } from 'react';

const PrintingContext = createContext();

export const usePrintingContext = () => {
  return useContext(PrintingContext);
};

export const PrintingProvider = ({ children }) => {
  const [printing, setPrinting] = useState(false);
  const [isMoreVisible, setMoreVisible] = useState({
    microsoft: false,
    otherCompany: false,
  });

  const toggleMoreContent = (company) => {
    setMoreVisible((prevState) => ({
      ...prevState,
      [company]: !prevState[company],
    }));
  };

  const handlePrint = () => {
    setPrinting(true);
    window.print();
    setPrinting(false);
  };

  return (
    <PrintingContext.Provider
      value={{ printing, handlePrint, toggleMoreContent, isMoreVisible }}
    >
      {children}
    </PrintingContext.Provider>
  );
};
