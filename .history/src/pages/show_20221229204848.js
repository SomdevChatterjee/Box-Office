/* eslint-disable no-console */
import React, {  } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
  const { id }= useParams();
  console.log('params', id);

  return (
    <div>
      <h1>this is show page</h1>
    </div>
  )
}

export default Show