import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [ input , setInput]  = useState('');
  const [results, setResults] = useState(null);


  const onSearch = ()=>{
    // https://api.tvmaze.com/search/shows?q=man
    // eslint-disable-next-line no-console
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(r=>r.json())
    .then(result=>
      setResults();
    // eslint-disable-next-line no-console
      console.log(result)
      )
  };

  const onInputChange = (ev)=>{
      // eslint-disable-next-line no-console
      setInput(ev.target.value);
  }

  const onKeyDown = (ev) =>{
 
    if(ev.keyCode === 13){
      onSearch();
   }
  };
  
  const renderResults = () =>{
    // some conditions for the results to be displayed

    if(results && results.length === 0){
        return <h1>No Results</h1>
    }

    if(results && results.length > 0){
      return <div>
        {results.map( items=><div>
          <h4>
            {items.show.name}
          </h4>
          <h3>status{items.show.status}</h3>
          </div> )}
      </div>
    }

      return null;
  };

  return (
    <div>
      <MainPageLayout>
        <input type ="text" onChange={onInputChange} onKeyDown={onKeyDown}/>
        <button type="button" onClick={onSearch}>Search</button>
        {renderResults()}
      </MainPageLayout>
    </div>
  )
}

export default Home;

