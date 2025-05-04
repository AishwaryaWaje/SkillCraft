import React from 'react';

const CurrentLap = ({ currentLapTime }) => {
  const formatTime = ms => {
    const getSeconds = `0${Math.floor((ms / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((ms / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor(ms / 3600000)}`.slice(-2);
    const getMilliseconds = `00${ms % 1000}`.slice(-3);
    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <div style={{ marginTop: '10px', fontStyle: 'italic' }}>
      Current Lap Duration: {formatTime(currentLapTime)}
    </div>
  );
};

export default CurrentLap;
