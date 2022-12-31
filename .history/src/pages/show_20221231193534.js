/* eslint-disable no-console */
import React,{useEffect, useState, useReducer} from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';


const reducer = (prevState, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':{
      return {...prevState, isloading: false, error:null show: action.show}
    }
    case 'FETCH_FAILED':{
      return{...prevState, isloading:false, error:acticn.error };
    }
    default:return prevState
  }
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
  
  const [{show, isLoading, error}, dispatch] = useReducer(reducer, initialState)
  // const [show, setShow] = useState(null) 
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);


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
  console.log(show)


  if(isLoading){
    return<div><h1>data is being loaded</h1></div>
  }

  if(error){
    return <div><h1>Error occured:{error}</h1></div>
  }
  return (
    <div>
      <h1>this is show page</h1>
    </div>
  )
}

export default Show