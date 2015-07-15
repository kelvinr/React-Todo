require('../css/main.sass');
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/layout/App';

React.render(<App />, document.body);
