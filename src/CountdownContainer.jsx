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
  const handleInputChange = event => {
    setTime({
      ...time,
      [event.currentTarget.name]: Number(event.currentTarget.value),
    });
  };
  const [sliderValue, setSlider] = useState({
    min: 0,
  });

  const handleChange = event => {
    setSlider({
      ...sliderValue,
      min: Number(event),
    });
    if (event === 3600) {
      time.min = 60;
      time.sec = 0;
    }
    if (event === 0) {
      time.min = 0;
      time.sec = 0;
    }
  };

  const [perc, setPerc] = useState({
    minValue: 0,
    secValue: 0,
  });
  const [interv, setInterv] = useState();
  const [keys, setKeys] = useState(statuses.START);
  const sliderMinutes = sliderValue.min;

  let updatedS = time.sec;

  let updatedM = time.min;
  if (sliderMinutes !== 0) {
    time.min = Math.floor(sliderMinutes / 60);
    time.sec = sliderMinutes - time.min * 60;
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
    setKeys(statuses.RESUME);
    setTime({
      msec: updateMS,
      sec: updatedS,
      min: updatedM,
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
                    {`${updatedM >= 10 ? updatedM : `0${updatedM}`}` || '00'}
                  </span>
                  <span className={classes.span}>
                    {`: ${updatedS >= 10 ? updatedS : `0${updatedS}`}` || '00'}
                  </span>
                </div>
              ) : (
                <CountDown
                  keys={keys}
                  minutes={updatedM}
                  seconds={updatedS}
                  handleInputChange={handleInputChange}
                  value={time}
                  handleChange={handleChange}
                  sliderValue={sliderMinutes}
                />
              )}
            </div>
            <div className={classes.progress}>
              <Progress type="circle" percent={keys === 'START' ? 0 : percentage} />
            </div>
          </div>

          {keys === 'START' ? (
            <div className={classes.buttons}>
              <Button className={classes.button} onClick={start}>
                Запустить
              </Button>
            </div>
          ) : (
            ''
          )}
          {keys === 'PAUSE' ? (
            <div className={classes.buttons}>
              <Button className={classes.button} onClick={stop}>
                Остановить
              </Button>
              <Button className={classes.button} onClick={reset}>
                Сброс
              </Button>
            </div>
          ) : (
            ''
          )}
          {keys === 'RESUME' ? (
            <div className={classes.buttons}>
              <Button className={classes.button} onClick={resume}>
                Запустить
              </Button>
              <Button className={classes.button} onClick={reset}>
                Сброс
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      <audio src="https://avto-life.club/alert.ogg" ref={myAudio} preload="true" id="1" />
    </div>
  );
};

export default CountdownContainer;
