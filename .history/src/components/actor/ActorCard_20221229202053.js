import React from 'react'

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <Actor>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'Country not known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>
    </Actor>
  );
};

export default ActorCard
