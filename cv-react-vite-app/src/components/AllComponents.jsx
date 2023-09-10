import React from 'react';
import Header from './Header';
import Combined from './Combined';
import { PrintingProvider } from './PrintingContext';

function App() {
  return (
    <PrintingProvider>
      <div className="AllComponents">
        <Header />
        <Combined />
      </div>
    </PrintingProvider>
  );
}

export default App;
