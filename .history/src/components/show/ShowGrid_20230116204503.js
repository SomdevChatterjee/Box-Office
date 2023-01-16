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
      {data.map( ({show})=>{
       
       const isStarred = starredShows.includes(show.id)
       
       const onStarClick = () => {
        
        if(isStarred){
          dispatchStarred(type:'REMOVE')
        }

      }
       return (<ShowCard 
          key={show.id} 
          id = {show.id} 
          name={show.name} 
          image ={ show.image ? show.image.medium : IMAGE_NOT_FOUND }
          summary={show.summary}
          onStarClick={onStarClick}
        />);
      })
        
      }
    </FlexGrid>
  )
}

export default ShowGrid
