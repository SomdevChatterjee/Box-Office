/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config'
import { useShow } from '../misc/custom-hooks'

const Starred = () => {

  const [starred] = useShow()
  const [shows, setShows] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {

    if(starred && starred.length > 0){
      const promises = starred.map(showId => apiGet(`/shows/${showId}`))
      Promise.all(promises).then(results => {
        
        setShows(results);
        setIsLoading(false);
      }).catch(err =>{
        setError(err.message);
        setIsLoading
      })
    }else{
      setIsLoading(false);
    }
  })
  return (
    <div>
        <MainPageLayout><h1>this is Starred page</h1></MainPageLayout>
    </div>
  )
}

export default Starred
