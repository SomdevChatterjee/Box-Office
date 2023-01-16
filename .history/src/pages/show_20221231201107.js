/* eslint-disable no-console */
import React,{useEffect, useReducer} from 'react'
import { useParams } from 'react-router-dom'
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { apiGet } from '../misc/config';


const reducer = (prevState, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':{
      return { isloading: false, error:null, show: action.show}
    }

    case 'FETCH_FAILED':{
      return{...prevState, isloading:false, error:action.error };
    }

    default:
      return prevState
  }
}

const initialState = {
  show:null,
  isLoading: true,
  error :null
}
const Show = () => {
  const { id }= useParams();
  console.log('params', id);
  
  const [{show, isLoading, error}, dispatch] = useReducer(reducer, initialState);



 useEffect( ()=>{
    let isMounted = true;

    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(results =>{
        
          if(isMounted){

            dispatch( {type: 'FETCH_SUCCESS', show:results} )
          }

    }).catch((err=>{
      if(isMounted){

        dispatch( {type: 'FETCH_FAILED', error:err.message} )

      }
    }))

    return(()=>{
      isMounted = false;
    })
  },[id] )
  console.log('show', show)


  if(isLoading){
    return<div><h1>data is being loaded</h1></div>
  }

  if(error){
    return <div><h1>Error occured:{error}</h1></div>
  }
  return (<div>
    <div>
      <ShowMainData 
      image={show.image} 
      name={show.name} 
      summary={show.summary} 
      tags={show.genre} 
      rating={show.rating} 
      />
    </div>
    <div>
      <h1>Details</h1>
      <Details status={show.status} network={show.network} premiered={show.premiered}/>
      
    </div>
    <div>
      <h1>Seasons</h1>
      <Seasons sh/>
    </div>
    <div>
      <h1>Cast</h1>
      <Cast/>
    </div>
  </div>
    
  )
}

export default Show