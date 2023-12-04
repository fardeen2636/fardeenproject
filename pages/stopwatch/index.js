import React, { useState, useRef } from "react";


const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);


  const handleStart = () => {                                                       
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
      setIsRunning(true);
    }
  };


  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };


  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };


  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };


  return (
    <>
      <center>
        <div className="stopwatch">
          <h1>Stopwatch</h1>
          <h1>{formatTime()}</h1>
          <div className="controls">
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Stop</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </center>
    </>
  );
};


export default Stopwatch;
