import React from 'react'
import ActorCard from './ActorCard'

const ActorGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({show})=><ActorCard 
        key={show.id}
        id={show.id}
        name={}/> )
      }
    </div>
  )
}

export default ActorGrid
