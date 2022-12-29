import React from 'react'
import ShowCard from './ShowCard'
import IMAGE_NOT_FOUND from '../../images/not-found.po'
const ShowGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({ show })=><ShowCard key={show.id} name={show.name} image={show.image?show.image.medium:"dname"}/> )
      }
    </div>
  )
}

export default ShowGrid
