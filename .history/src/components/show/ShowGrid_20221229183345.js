import React from 'react'
import ShowCard from './ShowCard'


const ShowGrid = ({data}) => {
  return (
    <div>
      {
        data.map( ({show})=><ShowCard key={show.if}/> )
      }
    </div>
  )
}

export default ShowGrid
