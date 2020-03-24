/* eslint-disable react/require-default-props */
/* eslint-disable linebreak-style */

/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'antd';
import classes from './app.module.scss';

const Timer = (props) => {
  return (
    <div>
      <div className={classes.timeCounter}>
        <span>{props.time.min >= 10 ? props.time.min : `0${props.time.min}`}</span>
        &nbsp;:&nbsp;
        <span>{props.time.sec >= 10 ? props.time.sec : `0${props.time.sec}`}</span>
        &nbsp;:&nbsp;
        <span>{props.time.msec >= 10 ? props.time.msec : `0${props.time.msec}`}</span>
      </div>
      <div className={classes.buttons}>
        {props.status === 0 ? (
          <Button className={classes.button} onClick={props.start}>
            Запустить
          </Button>
        ) : (
          <Button className={classes.button} onClick={props.stop}>
            Остановить
          </Button>
        )}
        <Button className={classes.button} onClick={props.reset}>
          Сброс
        </Button>
      </div>
    </div>
  );
};

Timer.propTypes = {
  status: PropTypes.number,
  reset: PropTypes.func,
  stop: PropTypes.func,
  start: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  time: PropTypes.object,
};

export default Timer;