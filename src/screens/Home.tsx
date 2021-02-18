/** @jsx jsx */
import React from 'react';
import RamUsageExample from '../components/RamUsageExample';
import NeuDefault from '../components/NeuDefault';
import { jsx, Box, Styled } from 'theme-ui';

const Home = (): JSX.Element => {
  return (
    <div sx={{ variant: 'layout.main' }}>
      <Styled.h1 data-testid="caption">NeutralinoJs</Styled.h1>
      <Styled.div id="neuDefault">
        <NeuDefault />
      </Styled.div>
      <Styled.div id="ramUsage">
        <RamUsageExample />
      </Styled.div>
    </div>
  );
};

export default Home;
