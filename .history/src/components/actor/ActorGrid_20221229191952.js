import React from 'react'
import ActorCard from './ActorCard'

const ActorGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({show})=><ActorCard 
        key={}/> )
      }
    </div>
  )
}

export default ActorGrid
