import React from 'react';

const Details = ({ status, premiered, network }) => {
  return (
    <deta>
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
