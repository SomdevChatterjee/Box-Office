import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';

const Home = () => {

  const [ input , setInput]  = useState('');
 /* state used to show results */
  const [results, setResults] = useState(null);


  const onSearch = ()=>{
    // the api =  https://api.tvmaze.com/search/shows?q=man
    
    apiGet(`search/shows?q=${input}`)
      .then(result => {
        setResults(result);
        // eslint-disable-next-line no-console
        console.log(result);
      });
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

    if(results === true && results.length === 0){
        return <div><h1>No Results</h1></div>
    }

    if(results && results.length > 0){
      return <div>
        {results.map( items=><div>
          <h4>
            {items.show.name}
          </h4>
          <h5>status: <i>{items.show.status}</i></h5>
          </div> )}
      </div>
    }

      return null;
  };

  return (
    <div>
      <MainPageLayout>
        <input type ="text" placeholder= "search for a movie or actor" onChange={onInputChange} onKeyDown={onKeyDown}/>
        <div>
          <label>
            Shows<input type=/>
          </label>
        </div>
        <button type="button" onClick={onSearch}>Search</button>
        {renderResults()}
      </MainPageLayout>
    </div>
  )
}

export default Home;

