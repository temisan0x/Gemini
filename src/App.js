import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SimpleSlider from './components/SimpleSlider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/navbar/Hero';
import Featured from './components/navbar/Featured';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>  
        {/* <SimpleSlider/> */}
        <Hero />
        <Featured/>
      </div>
    </Router>
  );
}

export default App;
