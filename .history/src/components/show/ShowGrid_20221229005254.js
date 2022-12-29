import React from 'react'
import ShowCard from './ShowCard'

const ShowGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({ show })=><ShowCard key={show.id} name={show.name} image={}/> )
      }
    </div>
  )
}

export default ShowGrid
