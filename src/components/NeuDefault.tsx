import React from 'react';
import { Styled } from 'theme-ui';

const NeuDefault = (): JSX.Element => {
  return (
    <Styled.h3>
      {`${NL_NAME} is running on port ${NL_PORT} inside ${NL_OS}`} <br />
      <br />
      <span> {`v ${NL_VERSION}`} </span>
    </Styled.h3>
  );
};

export default NeuDefault;
