/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-plusplus */

import React, { useState, useRef } from 'react';
import { Progress, Button } from 'antd';
import CountDown from './Countdown';
import classes from './app.module.scss';

const CountdownContainer = () => {
  const statuses = {
    PAUSE: 'PAUSE',
    START: 'START',
    RESET: 'RESET',
    RESUME: 'RESUME',
  };

  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  });

  const sliderMinutes = time.min;
  const handleInputChange = event => {
    setTime({
      ...time,
      [event.currentTarget.name]: Number(event.currentTarget.value),
    });
  };

  const handleChange = event => {
    setTime({
      ...time,
      min: Math.floor(event / 60),
      sec: event - time.min * 60,
    });
  };

  const [perc, setPerc] = useState({
    minValue: 0,
    secValue: 0,
  });
  const [interv, setInterv] = useState();
  const [keys, setKeys] = useState(statuses.START);

  if (time.sec > 59) {
    setTime({
      ...time,
      sec: 0,
    });
  }

  if (time.sec < 0) {
    setTime({
      ...time,
      sec: 0,
    });
  }
  if (time.min > 720) {
    setTime({
      ...time,
      min: 720,
    });
  }

  const valueNum = Number(perc.minValue * 60 + perc.secValue + 1);
  const updatedValue = Number(time.min * 60 + time.sec);
  const percentage = Math.ceil(100 - (updatedValue * 100) / valueNum);

  const myAudio = useRef();

  const handleBeep = () => {
    if (myAudio.current !== null) {
      myAudio.current.play();
    }
    return myAudio.current.play();
  };

  let updateMS = 100;
  let updatedSec = time.sec;
  let updatedMin = time.min;

  const stop = () => {
    clearInterval(interv);
    setKeys(statuses.RESUME);
    setTime({
      msec: updateMS,
      sec: updatedSec,
      min: updatedMin,
    });
  };

  const reset = () => {
    clearInterval(interv);
    setKeys(statuses.START);
    setTime({
      msec: 100,
      sec: 0,
      min: 0,
    });
  };

  const run = () => {
    if (updatedMin === 0 && updatedSec === 0) {
      updatedMin = 0;
      updatedSec = 0;
      handleBeep();
      return stop();
    }
    if (updatedSec === 0 && updateMS === 0) {
      updatedMin--;
      updateMS = 99;
      updatedSec = 59;
    }
    if (updateMS === 0) {
      updatedSec--;
      updateMS = 99;
    }
    updateMS--;

    return setTime({
      msec: updateMS,
      sec: updatedSec,
      min: updatedMin,
    });
  };

  const start = () => {
    run();
    setPerc({
      minValue: time.min,
      secValue: time.sec,
    });
    setKeys(statuses.PAUSE);
    setInterv(setInterval(run, 10));
  };

  const resume = () => {
    run();
    setKeys(statuses.PAUSE);
    setInterv(setInterval(run, 10));
  };

  return (
    <div>
      <div className={classes.activePart}>
        <div>
          <div className={classes.countdown}>
            <div className={classes.inputArea}>
              {keys !== 'START' ? (
                <div className={classes.span}>
                  <span className={classes.span}>
                    {`${time.min >= 10 ? time.min : `0${time.min}`}` || '00'}
                  </span>
                  <span className={classes.span}>
                    {`: ${time.sec >= 10 ? time.sec : `0${time.sec}`}` || '00'}
                  </span>
                </div>
              ) : (
                <CountDown
                  keys={keys}
                  minutes={time.min}
                  seconds={time.sec}
                  handleInputChange={handleInputChange}
                  handleChange={handleChange}
                  value={time}
                  sliderValue={sliderMinutes}
                />
              )}
            </div>
            <div className={classes.progress}>
              <Progress type="circle" percent={keys === 'START' ? 0 : percentage} />
            </div>
          </div>
          <div className={classes.buttons}>
            {keys === 'START' ? (
              <Button className={classes.button} onClick={start}>
                Запустить
              </Button>
            ) : (
              ''
            )}
            {keys === 'PAUSE' ? (
              <Button className={classes.button} onClick={stop}>
                Остановить
              </Button>
            ) : (
              ''
            )}
            {keys === 'RESUME' ? (
              <Button className={classes.button} onClick={resume}>
                Продолжить
              </Button>
            ) : (
              ''
            )}
            {keys !== 'START' ? (
              <Button className={classes.button} onClick={reset}>
                Сброс
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      <audio src="https://avto-life.club/alert.ogg" ref={myAudio} preload="true" id="1" />
    </div>
  );
};

export default CountdownContainer;
