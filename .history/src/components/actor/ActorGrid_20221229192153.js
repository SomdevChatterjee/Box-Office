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
        image={show.image? show.image.medium:IAGE}/> )
      }
    </div>
  )
}

export default ActorGrid
