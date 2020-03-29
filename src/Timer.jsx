/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

import React, { useState } from 'react';
import { Button } from 'antd';
import classes from './app.module.scss';

const Timer = () => {
  const [time, setTime] = useState({
    msec: 0,
    sec: 0,
    min: 0,
    hrs: 0,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  let updatedMs = time.msec;
  let updatedS = time.sec;
  let updatedM = time.min;
  let updatedH = time.hrs;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 99) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({
      msec: updatedMs,
      sec: updatedS,
      min: updatedM,
      hrs: updatedH,
    });
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({
      msec: 0, sec: 0, min: 0, hrs: 0,
    });
  };
  return (
    <div>
      <div className={classes.timeCounter}>
        <span>{time.min >= 10 ? time.min : `0${time.min}`}</span>
        &nbsp;:&nbsp;
        <span>{time.sec >= 10 ? time.sec : `0${time.sec}`}</span>
        &nbsp;:&nbsp;
        <span>{time.msec >= 10 ? time.msec : `0${time.msec}`}</span>
      </div>
      <div className={classes.buttons}>
        {status === 0 ? (
          <Button className={classes.button} onClick={start}>
            Запустить
          </Button>
        ) : (
          <Button className={classes.button} onClick={stop}>
            Остановить
          </Button>
        )}
        <Button className={classes.button} onClick={reset}>
          Сброс
        </Button>
      </div>
    </div>
  );
};


export default Timer;
