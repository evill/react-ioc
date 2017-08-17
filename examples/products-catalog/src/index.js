import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {IoC} from 'react-ioc';
import {IoCContainer} from 'ioc';

let container = new IoCContainer();

ReactDOM.render(
    (
        <IoC container={container}>
            <App />
        </IoC>
    ),
    document.getElementById('root')
);

registerServiceWorker();
