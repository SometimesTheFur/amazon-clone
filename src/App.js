import React from 'react';
import Header from './Header/Header';

import './App.css';

function App() {
  return (
    //BEM Convention
    <div className="App">
      <h1>Yo! I'm Geoff Beetoes!
      </h1>
      {/* Header */}
      <Header />
      {/* Home */}
    </div>
  );
}

export default App;
