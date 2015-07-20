import React from 'react';
import TodoListStore from '../../stores/TodoListStore';
import TodoListActionCreators from '../../actions/TodoListActionCreators';
import ListItems from './ListItems';
import { Paper } from 'material-ui';

function getStateFromStores() {
  return {
    list: TodoListStore.getList(),
    items: TodoListStore.getItems()
  }
};

export default class ListView extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = getStateFromStores();
  }

  componentDidMount() {
    TodoListStore.addChangeListener(this._onChange);
    TodoListActionCreators.loadList();
  }

  componentWillUnmount() {
    TodoListStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getStateFromStores());
  }
  
  render() {
    return (
      <Paper style={{
        margin: '2% auto',
        width: '80%'
      }} zDepth={5}>
        <h1>{this.state.list.title}</h1>
      <ListItems items={this.state.items} />

      </Paper>
    );
  }
};
