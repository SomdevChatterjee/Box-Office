import React from 'react'
import { FlexGrid } from '../styled';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <Flex>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'Country not known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>
    </Flex>
  );
};

export default ActorCard
