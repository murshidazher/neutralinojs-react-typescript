import React from 'react';
import { Styled } from 'theme-ui';

const NeuDefault = (): JSX.Element => {
  return (
    <Styled.h3>
      {`${NL_NAME} is running on port ${NL_PORT} inside a ${NL_OS} and ${NL_AP}`}
      <br />
      <br />
      <span> {`v ${NL_VERSION}`} </span>
    </Styled.h3>
  );
};

export default NeuDefault;
