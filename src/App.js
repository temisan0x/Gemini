import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/Hero';
import Featured from './components/Featured';
import ContentContainer from './components/ContentContainer';
import GeminiEarn from './components/GeminiEarn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>  
        <Hero />
        <Featured/>
        <ContentContainer/>
        <GeminiEarn/>
      </div>
    </Router>
  );
}

export default App;
