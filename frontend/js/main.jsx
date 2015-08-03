import '../css/main.scss';
import React from 'react';
import { ROOT } from './constants';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import Root from './Root';

const history = ROOT === '' ?
  new BrowserHistory() : 
  new HashHistory()

React.render(<Root history={history} />, document.getElementById('app'));
