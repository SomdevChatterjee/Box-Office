import React from 'react'
import ActorCard from './ActorCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png'

const ActorGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({person})=>
        <ActorCard 
          key={person.id}
          id={person.id}
          country={}
          name={person.name}
          image={person.image? person.image.medium:IMAGE_NOT_FOUND}
          birthday={person.birthday}/> 
        )
      }
    </div>
  )
}

export default ActorGrid
