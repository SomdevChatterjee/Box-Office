import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
const [ input , setInput]  = useState('');

const onInputChange = (ev)=>{
    console.log();
}
  return (
    <div>
      <MainPageLayout>
        <input type ="text" onChange={onInputChange} />
      </MainPageLayout>
    </div>
  )
}

export default Home;

