import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <>
          <Router>
            <Navbar/>
          </Router>
        </>
    </div>
  );
}

export default App;
