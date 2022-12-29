import React from 'react'
import ShowCard from './ShowCard'
import IMAGE_

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
