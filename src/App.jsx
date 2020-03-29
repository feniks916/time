/* eslint-disable no-plusplus */

import React from 'react';
import { Tabs } from 'antd';
import classes from './app.module.scss';
import Timer from './Timer';
import CountdownContainer from './CountdownContainer';

const App = () => {
  const { TabPane } = Tabs;
  return (
    <div className={classes.section}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Timer" key="1">
          <Timer />
        </TabPane>
        <TabPane tab="Countdown" key="2">
          <CountdownContainer />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default App;
