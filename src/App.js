import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.css';

function App() {
  return (
    //BEM Convention
    <div className="App">
      {/* Yo! I'm Geoff Beetoes! */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
