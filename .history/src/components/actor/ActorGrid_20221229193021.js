import React from 'react'
import ActorCard from './ActorCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const ActorGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({actor})=><ActorCard 
        key={show.id}
        id={show.id}
        name={show.name}
        image={show.image? show.image.medium:IMAGE_NOT_FOUND}
        summary={show.summary}/> )
      }
    </div>
  )
}

export default ActorGrid
