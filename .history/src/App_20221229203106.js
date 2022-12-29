import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (

  <Switch>
      
      <Route exact path="/">
        <Home/>
      </Route>
    
      <Route exact path='/starred'>
        <Starred/>
      </Route>
      <Route></Route>
      <Route>
        <div>
          <h1>Not Found</h1>
        </div>
      </Route>
      
    </Switch>
  );
}

export default App;
