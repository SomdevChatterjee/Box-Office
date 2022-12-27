import React from 'react'
import Navs from './Navs'
import Title from './Title'


const MainPageLayout = ({children}) => {
  return (
    <div>
        <Title title='box Office' subtitle="Are you looking or a movie or an actor?"/>
      <Navs />
        {children}
  
    </div>
  )
}

export default MainPageLayout
