import React from 'react';
import TodoListStore from '../../stores/TodoListStore';
import TodoListActionCreators from '../../actions/TodoListActionCreators';
import TodoLists from './TodoLists';
import { Styles } from 'material-ui';
let { Spacing, Typography } = Styles;

export default class TodoListView extends React.Component {

  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = {lists: TodoListStore.getAll()};
  }

  componentDidMount() {
    TodoListStore.addChangeListener(this._onChange);
    TodoListActionCreators.loadTodoLists();
  }

  componentWillUnmount() {
    TodoListStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({lists: TodoListStore.getAll()});
  }

  getStyles() {
    return {
      root: {
        paddingTop: Spacing.desktopKeylineIncrement
      }
    }
  }

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.root}>
        <TodoLists lists={this.state.lists} />
      </div>
    );
  }
};
