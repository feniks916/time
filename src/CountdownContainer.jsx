/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-plusplus */

import React, { useState, useRef } from 'react';
import CountDown from './Countdown';

const CountdownContainer = () => {
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  });
  const handleInputChange = (event) => {
    setTime({
      ...time,
      [event.currentTarget.name]: Number(event.currentTarget.value),
    });
  };
  const [sliderValue, setSlider] = useState({
    min: 0,
  });
  const handleChange = (event) => {
    setSlider({
      ...sliderValue,
      min: Number(event),
    });
  };

  const [perc, setPerc] = useState({
    minValue: 0,
    secValue: 0,
  });
  const [interv, setInterv] = useState();
  const [keys, setKeys] = useState(0);
  const sliderMinutes = sliderValue.min;

  let updatedS = time.sec;

  let updatedM = time.min;
  if (sliderMinutes !== 0) {
    time.min = Math.floor(sliderMinutes / 60);
    time.sec = sliderMinutes - (time.min * 60);
  }
  let updateMS = 0;

  const valueNum = Number(perc.minValue * 60 + perc.secValue + 1);
  const updatedValue = Number(updatedM * 60 + updatedS);
  const percentage = Math.ceil(100 - (updatedValue * 100) / valueNum);

  const myAudio = useRef();

  const handleBeep = () => {
    if (myAudio.current !== null) {
      myAudio.current.play();
    }
    return myAudio.current.play();
  };

  if (updatedS > 59) {
    updatedM += 1;
    updatedS = 59;
  }
  if (updatedM > 720) {
    updatedM = 719;
  }

  const stop = () => {
    clearInterval(interv);
    setKeys(2);
    setTime({
      msec: updateMS,
      sec: updatedS,
      min: updatedM,
    });
  };

  const reset = () => {
    clearInterval(interv);
    setKeys(0);
    setTime({
      msec: 100,
      sec: 0,
      min: 0,
    });
  };

  const run = () => {
    if (updatedM === 0 && updatedS === 0) {
      updatedM = 0;
      updatedS = 0;
      handleBeep();
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
    setPerc({
      minValue: updatedM,
      secValue: updatedS,
    });
    setKeys(1);
    setInterv(setInterval(run, 10));
  };

  const resume = () => {
    run();
    setKeys(1);
    setInterv(setInterval(run, 10));
  };

  return (
    <div>
      <CountDown
        keys={keys}
        minutes={updatedM}
        seconds={updatedS}
        reset={reset}
        stop={stop}
        start={start}
        resume={resume}
        handleInputChange={handleInputChange}
        value={time}
        percentage={percentage}
        handleChange={handleChange}
        sliderValue={sliderMinutes}
      />
      <audio src="https://avto-life.club/alert.ogg" ref={myAudio} preload="true" id="1" />
    </div>
  );
};

export default CountdownContainer;
