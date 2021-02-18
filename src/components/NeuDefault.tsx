import React from 'react';

const NeuDefault = (): JSX.Element => {
  return (
    <h3>
      {`${NL_NAME} is running on port ${NL_PORT} inside a ${NL_OS}`} <br />
      <br />
      <span> {`v ${NL_VERSION}`} </span>
    </h3>
  );
};

export default NeuDefault;
