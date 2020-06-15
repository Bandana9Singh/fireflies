import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/navigation.js';
import LandingPage from './components/LandingPage/landingpage.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
    </div>
  );
}

export default App;
