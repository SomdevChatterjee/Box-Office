import React from 'react';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      
      <Route path={"/"}>
      <h1>This is a home page</h1>
      </Route>
    <Route>
      <h1></h1>
    </Route>

      hi
    </Switch>
  );
}

export default App;
