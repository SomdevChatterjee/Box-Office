import React from 'react';
import {Switch, Route } from 'react-router-dom';
import 
function App() {
  return (
    <div>

  <Switch>
      
      <Route exact path="/">
      <h1>This is a home page</h1>
      </Route>
    
      <Route exact path='/starred'>
        <h1>this is starred</h1>
      </Route>

      <Route>
        <h1>this is 404 page</h1>
      </Route>
      
    </Switch>
  
    </div>
  );
}

export default App;
