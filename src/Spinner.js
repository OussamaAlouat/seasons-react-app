import React from 'react';

const Spinner = (props) => {
  const { message } = props;
  return (
    <div class="ui active inverted dimmer">
      <div class="ui big text loader">{message}</div>
    </div>
  );
}

export default Spinner;
