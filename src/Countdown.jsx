/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Progress } from 'antd';
import classes from './app.module.scss';

const CountDown = props => {
  console.log(props);
  return (
    <div className={classes.activePart}>
      <div>
        <div className={classes.countdown}>
          <input
            type="text"
            value={`${props.value.min}`}
          />
          <input
            type="text"
            value={`${
              props.value.sec >= 10 ? props.value.sec : `0${props.value.sec}`
            }`}
          />
        </div>
        <div className={classes.buttons}>
          {props.keys === 0 ? (
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
      <div className={classes.progress}>
        <Progress type="circle" percent={75} />
      </div>
    </div>
  );
};

CountDown.propTypes = {
  keys: PropTypes.number,
  reset: PropTypes.func,
  stop: PropTypes.func,
  start: PropTypes.func,
  value: PropTypes.string,
};

export default CountDown;