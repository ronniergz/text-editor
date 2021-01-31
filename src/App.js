import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Landing from './components/LandingComponent';
import Home from './components/HomeComponent';
import List from './components/ListComponent';
import Editor from './components/EditorComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div />
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/list" render={() => <List />} />
          <Route exact path="/editor" render={() => <Editor />} />
          <Redirect to="/" />
        </Switch>
        <div />
      </div>
    </BrowserRouter>
  );
};

export default App;
