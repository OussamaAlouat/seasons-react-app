import React from 'react';

const ErrorComponent = (props) => {
  const { errorMessage } = props;
  return (
    <div className="ui tertiary inverted red segment">
      { errorMessage }
    </div>
  );
};

export default ErrorComponent;