/* eslint-disable no-console */
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';

const Show = () => {
  const { id }= useParams();
  console.log('params', id);
  
  useEffect( ()=>{
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{})
  },[id] )
  return (
    <div>
      <h1>this is show page</h1>
    </div>
  )
}

export default Show