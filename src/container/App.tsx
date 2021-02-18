import React from 'react';

import RamUsageExample from '../components/RamUsageExample';
import NeuDefault from '../components/NeuDefault';

const App = () => {
  return (
    <div>
      <h1 data-testid="caption">NeutralinoJs</h1>

      <div id="neuDefault">
        <NeuDefault />
      </div>
      <div id="ramUsage">
        <RamUsageExample />
      </div>
    </div>
  );
};

export default App;
