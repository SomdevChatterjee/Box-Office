/* eslint-disable no-console */
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';

const Show = () => {
  const { id }= useParams();
  console.log('params', id);
  
  const [show, setShow] = useState(null) 
  const [isLoading. setIsLoading]

  useEffect( ()=>{
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{
        setShow(results)
       
    })
  },[id] )
  console.log(show)


  return (
    <div>
      <h1>this is show page</h1>
    </div>
  )
}

export default Show