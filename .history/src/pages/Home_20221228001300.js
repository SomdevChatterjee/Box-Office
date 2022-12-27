import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const { input , setInput } = useState('')
  return (
    <div>
      <MainPageLayout>
        <input type ="text" />
      </MainPageLayout>
    </div>
  )
}

export default Home;

