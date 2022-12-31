/* eslint-disable no-console */
import React,{useEffect, useState, useReducer} from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';


const reducer = (prevState, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':{
      return {
        return{...prevState, isloading: false, error:null show: action.show}
      }
    }
    default:return prevState
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
  
  useReducer(reducer, initialState)
  // const [show, setShow] = useState(null) 
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);


 const [state, dispatch] =useEffect( ()=>{
    let isMounted = true;

    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(results =>{
        
          if(isMounted){

            dispatch({})
            setShow(results);
            setIsLoading(false);
          }

    }).catch((err=>{
      if(isMounted){
      setError(err.message);
      setIsLoading(false);
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