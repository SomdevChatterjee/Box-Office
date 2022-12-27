import React from 'react'
import { Switch } from 'react-router'

const MainPageLayout = () => {
  return (
    <div>
      <Navs/>
  <Switch>
      
      <Route exact path="/">
        <Home/>
      </Route>
    
      <Route exact path='/starred'>
        <Starred/>
      </Route>

      <Route>
        <div>
          <h1>Not Found</h1>
        </div>
      </Route>
      
    </Switch>
  
    </div>
  )
}

export default MainPageLayout
