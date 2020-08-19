import React from 'react';

const SeasonDisplay = (props) => {
  const { lat } = props;
  return <div>Latitude: { lat }</div>
};

export default SeasonDisplay;