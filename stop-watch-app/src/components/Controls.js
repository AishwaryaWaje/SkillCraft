import React from 'react';

const Controls = ({ running, onStart, onPause, onReset, onLap }) => {
  return (
    <div className="buttons">
      {!running ? (
        <button onClick={onStart}>Start</button>
      ) : (
        <button onClick={onPause}>Pause</button>
      )}
      <button onClick={onReset}>Reset</button>
      <button onClick={onLap} disabled={!running}>
        Lap
      </button>
    </div>
  );
};

export default Controls;
