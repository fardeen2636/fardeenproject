import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import style from "./stop.module.css";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const [flagEntries, setFlagEnteries] = useState([]);

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
    setFlagEnteries([]);
  };
  const handleFlag = () => {
    if (isRunning !== null) {
      const entrytime = (time - isRunning) / 1000;
      setFlagEnteries([...flagEntries, entrytime.toFixed(3)]);
    }
  };
  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    console.log("====result====");
    const YourComponent = () => {
      return (
        <div className="container">
          <div class="thing_texts">
            <div className="content">Your Content</div>
          </div>
        </div>
      );
    };
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div
              style={{
                border: "7px solid #ccc",
                padding: "20px",
                marginRight: "150px",
              }}
            >
              <h1>Flag Entry</h1>
              <ul>
                {flagEntries.map((entry, index) => (
                  <li key={index}>{entry}second</li>
                ))}
              </ul>
            </div>
          </Col>

          <Col>
            <div
              /*  */ style={{
                border: "7px solid #ccc",
                padding: "20px",
                marginRight: "50px",
              }}
            >
              <h1>Stopwatch</h1>
              <h1>{formatTime()}</h1>
              <div className="controls">
                <Button variant="primary" onClick={handleFlag}>
                  Flag
                </Button>
                <Button variant="success" onClick={handleStart}>
                  Start
                </Button>
                {""}
                <Button variant="danger" onClick={handlePause}>
                  Stop
                </Button>
                {""}
                <Button variant="warning" onClick={handleReset}>
                  Reset
                </Button>
                {""}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Stopwatch;
