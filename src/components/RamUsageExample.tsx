/** @jsx jsx */
import React, { useState, useEffect, useCallback } from 'react';
import { jsx } from 'theme-ui';

const RamUsageExample = (): JSX.Element => {
  const [aMemVal, setAMemVal] = useState('');
  const [tMemVal, setTMemVal] = useState('');
  const [isbtnRamUsage, setRamUsage] = useState(0);

  useEffect(() => {
    // Runs Once after initial rendering
  }, []);

  const getMemBtn = useCallback(() => {
    return (
      <input
        css={{
          color: 'black',
          backgroundColor: 'white',
          borderColor: 'green',
          borderRadius: '0.25rem',
          textAlign: 'center',
          border: '1px solid transparent',
          padding: '0.375rem 0.75rem',
          fontsize: '1rem',
          lineHeight: '1.5',
          cursor: 'pointer',
        }}
        type="button"
        value="Get Ram Usage"
        onClick={() => {
          ramUsage();
          isRamBtnClicked();
        }}
      />
    );
  }, []);

  const ramUsage = () => {
    Neutralino.computer.getRamUsage(
      (data) => {
        const aMem =
          (data['ram']['available'] / (1024 * 1024)).toFixed(3) + ' GB';
        setAMemVal(aMem);

        const tMem = (data['ram']['total'] / (1024 * 1024)).toFixed(3) + ' GB';
        setTMemVal(tMem);
      },
      () => {
        setAMemVal('Error While Executing');
      }
    );
  };

  const isRamBtnClicked = () => {
    setRamUsage(1);
  };

  return (
    <div>
      {getMemBtn()}
      {isbtnRamUsage === 1 ? (
        <p>
          Available Memory :
          <span sx={{
            margin: 10,
          }}>
            {aMemVal}
          </span>
          Total Memory :
          <span sx={{
            margin: 10,
          }}>
            {tMemVal}
          </span>
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default RamUsageExample;
