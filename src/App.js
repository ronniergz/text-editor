import React from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Landing from './components/LandingComponent';
import Home from './components/HomeComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/home" render={() => <Home />} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
