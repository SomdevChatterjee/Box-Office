import React from 'react'
import Navs from './Navs'
import Title from './Title'


const MainPageLayout = ({children}) => {
  return (
    <div>
        <Title ti></Title>
      <Navs />
        {children}
  
    </div>
  )
}

export default MainPageLayout
