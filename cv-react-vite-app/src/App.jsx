// App.js
import React from 'react';
import './styles/style.css';
import AllComponents from './components/AllComponents';
import  {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import FormCv from './components/FormCv';
import DisplayCvData from './components/DisplayCvData';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element = {<AllComponents />} />
          <Route path='/formCv' element = {<FormCv />} />
         <Route path="/:id" element={<DisplayCvData/>} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
