import React from 'react'
import ShowCard from './ShowCard'

const ShowGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({ show })=><ShowCard key={show.id} name={show.name} image={show.image?show.image.medium:IMAGE_NOT_FOUND}/> )
      }
    </div>
  )
}

export default ShowGrid
