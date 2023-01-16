/* eslint-disable no-unused-vars */
/* eslint-disable import/no-useless-path-segments */
import React from 'react'
import ShowCard from './ShowCard'
// eslint-disable-next-line import/no-unresolved
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../../components/styled';
import  { useShow } from '../../misc/custom-hooks';

const ShowGrid = ({data}) => {

  const [starredShows, dispatchStarred] = useShow();


  return (
    <FlexGrid>
      {data.map( ({show})=>
       
       
       
       ) )
        
      }
    </FlexGrid>
  )
}

export default ShowGrid
