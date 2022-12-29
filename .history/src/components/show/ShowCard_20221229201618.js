import React from 'react'
import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowaCardStyled';

const ShowCard = ({ id, image, name, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className='image-wrapper'>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <divclassName='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <button  type="button">Star me</button>
      </divclassName=>
    </StyledShowCard>
  );
};


export default ShowCard
