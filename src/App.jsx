/* eslint-disable no-plusplus */

import React, { useState } from 'react';
import { Tabs } from 'antd';
import classes from './app.module.scss';
import Timer from './Timer';
import CountdownContainer from './CountdownContainer';

const App = () => {
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
    console.log(Date.now());
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    console.log(Date.now());
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

  const { TabPane } = Tabs;
  return (
    <div className={classes.section}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Timer" key="1">
          <Timer
            status={status}
            reset={reset}
            stop={stop}
            start={start}
            time={time}
          />
        </TabPane>
        <TabPane tab="Countdown" key="2">
          <CountdownContainer />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;