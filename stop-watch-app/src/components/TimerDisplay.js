import React from 'react';

const TimerDisplay = ({ time }) => {
  const formatTime = ms => {
    const getSeconds = `0${Math.floor((ms / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((ms / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor(ms / 3600000)}`.slice(-2);
    const getMilliseconds = `00${ms % 1000}`.slice(-3);
    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return <div className="timer">{formatTime(time)}</div>;
};

export default TimerDisplay;
