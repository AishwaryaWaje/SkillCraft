import React, { useState, useRef } from 'react';
import './App.css';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import LapList from './components/LapList';
import CurrentLap from './components/CurrentLap';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const pause = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  const lap = () => {
    if (running) {
      setLaps([...laps, time]);
    }
  };

  const formatTime = ms => {
    const getSeconds = `0${Math.floor((ms / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((ms / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor(ms / 3600000)}`.slice(-2);
    const getMilliseconds = `00${ms % 1000}`.slice(-3);
    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  const lastLapTime = laps.length > 0 ? laps[laps.length - 1] : 0;
  const currentLapTime = time - lastLapTime;

  return (
    <div className="app">
      <h1>Stopwatch</h1>
      <TimerDisplay time={time} />
      <Controls running={running} onStart={start} onPause={pause} onReset={reset} onLap={lap} />
      {running && laps.length > 0 && <CurrentLap currentLapTime={currentLapTime} />}
      <LapList laps={laps} formatTime={formatTime} />
    </div>
  );
}

export default App;
