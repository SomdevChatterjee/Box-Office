import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [ input , setInput]  = useState('');

const onInputChange = (ev)=>{
    // eslint-disable-next-line no-console
    setInput(ev.target.value);
}
const onSearch = (ev)=>{
  console.log()
};
  return (
    <div>
      <MainPageLayout>
        <input type ="text" onChange={onInputChange} value={input}/>
        <button type="button" onClick={onSearch}>Search</button>
      </MainPageLayout>
    </div>
  )
}

export default Home;

