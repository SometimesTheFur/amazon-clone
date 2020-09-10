import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Basket/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    //BEM Convention
    <Router>
      <div className="App">
        <Header />
        {/* Yo! I'm Geoff Beetoes! */}
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
