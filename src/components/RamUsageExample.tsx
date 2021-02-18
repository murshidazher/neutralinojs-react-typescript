import React, { useState, useEffect, useCallback } from 'react';

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
        className="btn btn__ram-usage"
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
        <p id="ram">
          Available Memory :
          <span id="aMem" style={{ margin: 10 }}>
            {aMemVal}
          </span>
          Total Memory :
          <span id="tMem" style={{ margin: 10 }}>
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
