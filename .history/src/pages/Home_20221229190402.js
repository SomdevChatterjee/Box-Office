/* eslint-disable no-console */
import React, { useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {

  const [ input , setInput]  = useState('');
 /* state used to show results */
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  const onSearch = ()=>{
    // the api =  https://api.tvmaze.com/search/shows?q=man
    
    apiGet(`search/${searchOption}?q=${input}`)
      .then(result => {
        setResults(result);
        console.log(result);
      });
  };

  const onInputChange = (ev)=>{
     
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
      return results[0].shows 
      ? <ShowGrid data = {results}/>
      : <ActorGrid data = {results} />
    }

      return null;
  };

  const onRadioChange = (ev) =>{
    setSearchOption(ev.target.value);
    console.log(searchOption)
  };
  

  return (
    <div>
      <MainPageLayout>
        <input type ="text" placeholder= "search for a movie or actor" onChange={onInputChange} onKeyDown={onKeyDown}/>
        <div>
          <label htmlFor='showsSearch'>
            Shows<input id='showsSearch' type="radio" value='shows' onChange={onRadioChange} checked={isShowsSearch}/>
          </label>
          <label htmlFor='actorsSearch'>
            Actors<input id='actorsSearch' type="radio" value='people' onChange={onRadioChange} checked={!isShowsSearch}/>
          </label>
        </div>
        <button type="button" onClick={onSearch}>Search</button>
        {renderResults()}
      </MainPageLayout>
    </div>
  )
}

export default Home;

