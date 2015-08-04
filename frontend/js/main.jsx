import '../css/main.scss';
import React from 'react';
import { ROOT } from './constants';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import Root from './Root';

const history = ROOT === 'http://localhost:3000' ?
  new HashHistory() :
  new BrowserHistory() 

React.render(<Root history={history} />, document.getElementById('app'));
