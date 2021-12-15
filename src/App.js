import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SimpleSlider from './components/SimpleSlider';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>    
        <SimpleSlider/>
      </div>
    </Router>
  );
}

export default App;
