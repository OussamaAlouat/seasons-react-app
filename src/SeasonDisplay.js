import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }

  return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  const messageToShow = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{  messageToShow }</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;