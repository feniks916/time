import React from 'react';
import './App.css';
import { Tabs } from 'antd';
import Timer from './Timer';

export default class TabsComponent extends React.Component {
  render () {
    const { TabPane } = Tabs;
    function switchTab(key) {
      console.log(key);
    }

    return (
      <Tabs defaultActiveKey="1" onChange={switchTab}>
        <TabPane tab="Timer" key="1">
          <Timer />
        </TabPane>
        <TabPane tab="Countdown" key="2">
          Обратный отсчет
        </TabPane>
      </Tabs>
    );
  }
}
