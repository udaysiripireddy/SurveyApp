import React, { useState } from 'react';
import Questionnaire from './Questionnaire';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1>Customer Survey</h1>
      <Questionnaire />
      <Footer/>
    </div>
  );
}

export default App;
