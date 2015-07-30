import React, { PropTypes } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'redux/react';
import { createRedux } from 'redux';
import { loadLists } from './actions/listActions';
import * as components from './components';
import * as stores from './reducers';

const {
  Application,
  ListsView,
  ListView
} = components;

const redux = createRedux(stores);
redux.dispatch(loadLists());

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;

    return (
      <Provider redux={redux}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path="todo_lists" component={ListsView} />
        <Route path="todo_lists/:id" component={ListView} />
      </Route>
      <Redirect from="/" to="/todo_lists" />
    </Router>
  )
}
