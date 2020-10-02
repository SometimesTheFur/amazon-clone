import React, {useEffect} from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Cart/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Cart/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HXp0tA14IjnxybvQSh2mkcixIdCwMyZ4LrHfo29zQrPzV9kLU2drj9dVoflnkRnG8q4WlYpeZX3J9PMTupFtDg0004jB9F98X');

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
