import React from 'react'
import ActorCard from './ActorCard'

const ActorGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({show})=><ActorCard 
        key={show.id}
        id={show.id}
        name={show.name}
        iimage={}/> )
      }
    </div>
  )
}

export default ActorGrid
