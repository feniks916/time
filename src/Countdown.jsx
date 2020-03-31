/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */

import PropTypes from 'prop-types';
import React from 'react';
import { Slider } from 'antd';
import classes from './app.module.scss';

const CountDown = (props) => {
  return (
    <div className={classes.activePart}>
      <div>
        <div className={classes.silder}>
          {props.keys === 'START' ? (
            <Slider
              max={3600}
              min={0}
              step={15}
              name="min"
              defaultValue={props.sliderValue}
              onChange={props.handleChange}
            />
          ) : (
            <Slider
              max={60}
              min={0}
              name="min"
              defaultValue={props.sliderValue}
              onChange={props.handleChange}
              disabled
            />
          )}
        </div>
        <div className={classes.countdown}>
          <div className={classes.inputArea}>
            <div className={classes.inputs}>
              <input
                type="text"
                name="min"
                value={props.minutes || 0}
                onChange={props.handleInputChange}
              />
              <input
                type="text"
                name="sec"
                value={props.seconds || 0}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDown.propTypes = {
  keys: PropTypes.number,
  handleInputChange: PropTypes.func,
  seconds: PropTypes.number,
  minutes: PropTypes.number,
  handleChange: PropTypes.func,
  sliderValue: PropTypes.number,
};

export default CountDown;
