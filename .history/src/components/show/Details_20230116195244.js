import React from 'react';
import { DetailsWrapper } from './details.styled';

const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </deta>
  );
};

export default Details;
