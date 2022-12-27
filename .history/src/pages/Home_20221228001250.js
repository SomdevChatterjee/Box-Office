import React from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const { input , setInput }
  return (
    <div>
      <MainPageLayout>
        <input type ="text" />
      </MainPageLayout>
    </div>
  )
}

export default Home;

