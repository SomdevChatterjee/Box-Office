import React from 'react'
import Navs from './Navs'
import Title from './Title'


const MainPageLayout = ({children}) => {
  return (
    <div>
        <Title title="Box Office",subtitle="are yu looking for a movie or an actor"></Title>
      <Navs />
        {children}
  
    </div>
  )
}

export default MainPageLayout
