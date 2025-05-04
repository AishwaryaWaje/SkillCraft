import React from 'react';

const LapList = ({ laps, formatTime }) => {
  return (
    <div className="laps">
      <h2>Laps</h2>
      <ul>
        {laps.map((lapTime, index) => (
          <li key={index}>
            Lap {index + 1}: {formatTime(lapTime)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
