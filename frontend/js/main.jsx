require('../css/main.sass');

import React from 'react';
import Router from 'react-router';
import routes from './routes.js';

window = React.window;

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});
