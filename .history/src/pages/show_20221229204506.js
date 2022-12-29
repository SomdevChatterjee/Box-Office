import React from 'react'
import { useParams } from 'react-router-dom'
const Show = () => {
  const params = useParams();
  console.log('params', )

  return (
    <div>
      <h1>this is show page</h1>
    </div>
  )
}

export default Show