import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './components/HomeComponent';
import List from './components/ListComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div />
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/list" render={() => <List />} />
          <Redirect to="/home" />
        </Switch>
        <div />
      </div>
    </BrowserRouter>
  );
};

export default App;
