import React, { PropTypes } from 'react';
import TodoList from './TodoList';
import { Dialog, FlatButton, TextField, List, ListItem, RaisedButton, Paper } from 'material-ui';

export default class Lists extends React.Component {

  static propTypes = {
    lists: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { lists, actions } = this.props;

    let todoLists = lists.map( list => {
      return (
        <TodoList key={list.id} list={list} actions={actions} />
      ); 
    })

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

    let listForm = [
      <Dialog
        ref="ListForm"
        title="New Todo List"
        actions={formActions}
        actionFocus="submit"
        autoDetectWindowHeight={true}
        autoScrollBodyContent={true}>

        <TextField floatingLabelText="Title" type="text" name="title" fullWidth={true} ref="title" />
        <TextField 
          style={{minHeight: "200px"}}
          floatingLabelText="Description"
          fullWidth={true}
          multiLine={true}
          name="description"
          ref="description" />
      </Dialog>
    ];

    return (
      <Paper style={{
        margin: '2% auto',
        width: '80%'
      }} zDepth={5}>

        {listForm}

        <List>
          <ListItem disabled={true}
            primaryText={
              <RaisedButton 
                label="New Todo List"
                primary={true}
                onClick={this._newList}/>}
          />

          {todoLists}
        </List>

     </Paper>
    );
  }

  _newList = () => {
    this.refs.ListForm.show();
  }

  _handleDialogCancel = () => {
    this.refs.ListForm.dismiss();
  }

  _handleNewListSubmit = () => {
    let title = this.refs.title.getValue();
    let description = this.refs.description.getValue();
    this.props.actions.createList(title, description);
    this.refs.ListForm.dismiss();
  }
};
