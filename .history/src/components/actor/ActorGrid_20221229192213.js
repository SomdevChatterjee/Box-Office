import React from 'react'
import ActorCard from './ActorCard'
imort
const ActorGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({show})=><ActorCard 
        key={show.id}
        id={show.id}
        name={show.name}
        image={show.image? show.image.medium:IMAGE_NOT_FOUND}/> )
      }
    </div>
  )
}

export default ActorGrid
