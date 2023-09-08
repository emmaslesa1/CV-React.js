// App.js
import React from 'react';
import Header from './components/Header';
import Combined from './components/Combined';
import './styles/style.css';
import { PrintingProvider } from './components/PrintingContext';

function App() {
  return (
    <PrintingProvider>
      <div className="App">
        <Header />
        <Combined />
      </div>
    </PrintingProvider>
  );
}

export default App;
