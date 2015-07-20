import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';
import App from './components/layout/App';
import TodoListView from './components/todo_lists/TodoListView';
import ListView from './components/list_items/ListView';

export default (
  <Route name="app" path="/" handler={App} >
    <DefaultRoute name="lists" handler={TodoListView} />
    <Route name="list" path="/todo_lists/:id" handler={ListView} />
  </Route>
)
