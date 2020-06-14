import React from 'react';
import './App.scss';
import Navigation from './Navigation/navigation.js';
import LandingPage from './LandingPage/landingpage.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
    </div>
  );
}

export default App;
