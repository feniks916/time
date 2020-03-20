import React from 'react';
import './App.css';
import { Button } from 'antd';

export default class Timer extends React.Component {
    render () {
        return (
            <div>
                <Button>Запустить</Button>
                <Button>Сброс</Button>
            </div>
        )
    }
}