import React from 'react'

const MainPageLayout = () => {
  return (
    <div>
      <Navs/>
  <S>
      
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
      
    </S>
  
    </div>
  )
}

export default MainPageLayout
