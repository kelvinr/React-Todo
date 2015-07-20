import React from 'react';
import TodoListStore from '../../stores/TodoListStore';
import TodoListActionCreators from '../../actions/TodoListActionCreators';
import TodoLists from './TodoLists';
import { Dialog, FlatButton, TextField } from 'material-ui';

let methods = [
  '_onChange',
  '_newList',
  '_handleNewListSubmit',
  '_handleDialogCancel'
];

export default class TodoListView extends React.Component {
  constructor() {
    super();
    this.state = {lists: TodoListStore.getAll()};
    methods.forEach( method => {
      this[method] = this[method].bind(this)
    });
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

  render() {
    let formActions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleDialogCancel} />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this._handleNewListSubmit} />
    ];

    return (
      <div>
        <TodoLists lists={this.state.lists} newList={this._newList}/>
        <Dialog
          ref="ListForm"
          title="New Todo List"
          actions={formActions}
          actionFocus="submit"
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}>

         <TextField floatingLabelText="Title" type="text" name="title" fullWidth={true} ref="title" />
         <TextField 
           floatingLabelText="Description"
           fullWidth={true}
           multiLine={true}
           name="description"
           ref="description" />
         </Dialog>
      </div>
      );
  }

  _newList() {
    this.refs.ListForm.show();
  }

  _handleDialogCancel() {
    this.refs.ListForm.dismiss();
  }

  _handleNewListSubmit() {
    let title = this.refs.title.getValue()
    let description = this.refs.description.getValue()
    TodoListActionCreators.createTodoList(title, description);
    this.refs.ListForm.dismiss();
  }
};
