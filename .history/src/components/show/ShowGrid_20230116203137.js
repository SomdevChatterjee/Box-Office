/* eslint-disable import/no-useless-path-segments */
import React from 'react'
import ShowCard from './ShowCard'
// eslint-disable-next-line import/no-unresolved
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../../components/styled';

const ShowGrid = ({data}) => {

  const [starredShows, dispatchStarred] = useShows()


  return (
    <FlexGrid>
      {
        data.map( ({show})=><ShowCard 
        key={show.id} 
        id = {show.id} 
        name={show.name} 
        image ={ show.image ? show.image.medium : IMAGE_NOT_FOUND }
        summary={show.summary}
        /> )
        
      }
    </FlexGrid>
  )
}

export default ShowGrid
