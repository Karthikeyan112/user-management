import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.scss';


import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Redirect push to="/signin" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
