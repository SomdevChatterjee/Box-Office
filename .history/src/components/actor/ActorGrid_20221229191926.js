import React from 'react'

const ActorGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({show})=><Actor )
      }
    </div>
  )
}

export default ActorGrid
