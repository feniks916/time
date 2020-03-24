/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-plusplus */

import React, { useState, useRef } from 'react';
import CountDown from './Countdown';

const CountdownContainer = () => {
  const myAudio = useRef();

  const handleBeep = () => {
    if (myAudio.current !== null) {
      myAudio.current.play();
    }
    return myAudio.current.play();
  };
  const [time, setTime] = useState({
    sec: 1,
    min: 1,
    msec: 10,
  });
  const [interv, setInterv] = useState();
  const [keys, setKeys] = useState(0);

  let updatedS = time.sec;
  let updatedM = time.min;
  let updateMS = time.msec;

  const stop = () => {
    clearInterval(interv);
    setKeys(0);
    handleBeep();
  };

  const reset = () => {
    clearInterval(interv);
    setKeys(0);
    setTime({
      msec: 100,
      sec: 10,
      min: 0,
    });
  };

  const run = () => {
    if (updatedM === 0 && updatedS === 0) {
      updatedM = 0;
      updatedS = 0;
      return stop();
    }
    if (updatedS === 0) {
      updatedM--;
      updatedS = 59;
    }
    if (updateMS === 0) {
      updatedS--;
      updateMS = 99;
    }
    updateMS--;
    return setTime({
      msec: updateMS,
      sec: updatedS,
      min: updatedM,
    });
  };

  const start = () => {
    run();
    setKeys(1);
    setInterv(setInterval(run, 10));
  };

  return (
    <div>
      <CountDown keys={keys} value={time} reset={reset} stop={stop} start={start} time={time} />
      <audio src="https://avto-life.club/alert.ogg" ref={myAudio} crossOrigin="anonymous" preload="true" id="1" controls />
    </div>
  );
};

export default CountdownContainer;