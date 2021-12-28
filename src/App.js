import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/Hero';
import Featured from './components/Featured';
import ContentContainer from './components/ContentContainer';
import Nifty from './components/Nifty';
import ArticleContent from './components/ArticleContent';
import ProNovice from './components/ProNovice';
import LayoutContainer from './components/LayoutContainer';
import SubscribeText from './components/SubscribeText';
import Logo from './components/priceTracker/Logo';
import Coin from './components/priceTracker/Coin';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>  
        <Hero />
        <Featured/>
        <ContentContainer/>
        <Nifty/>
        <ArticleContent/>
        <ProNovice/>
        <LayoutContainer/>
        <SubscribeText/>
        <Logo/>
        <Coin/>
      </div>
    </Router>
  );
}

export default App;
