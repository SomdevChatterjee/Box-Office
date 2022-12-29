import React from 'react'
import ShowCard from './ShowCard'
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ShowGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({show})=><ShowCard 
        key={show.id} 
        id = {show.id} 
        name={show.name} 
        image ={ show.image ? show.image.medium : "fallbackimage" }/> )
      }
    </div>
  )
}

export default ShowGrid