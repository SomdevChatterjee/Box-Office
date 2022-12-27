import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [ input , setInput]  = useState('');
  
  const onSearch = ()=>{
    // https://api.tvmaze.com/search/shows?q=man
    // eslint-disable-next-line no-console
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(r=>r.json())
    // eslint-disable-next-line no-console
    .then(result=>console.log(result));
  };
const onInputChange = (ev)=>{
    // eslint-disable-next-line no-console
    setInput(ev.target.value);
}

const onKeyDown = (ev) =>{
 
  if(ev.keyCode === 13){
     // eslint-disable-next-line no-console
    console.log(ev.keyCode);
  }
  
};
  return (
    <div>
      <MainPageLayout>
        <input type ="text" onChange={onInputChange} onKeyDown={onKeyDown}/>
        <button type="button" onClick={onSearch}>Search</button>
      </MainPageLayout>
    </div>
  )
}

export default Home;

