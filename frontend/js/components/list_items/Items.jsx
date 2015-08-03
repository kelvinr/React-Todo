import React, { PropTypes } from 'react';
import Item from './Item';
import { Paper, List, ListItem, RaisedButton, FlatButton, Dialog, TextField } from 'material-ui';

export default class Items extends React.Component {

  static propTypes = {
    list: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { list, items, actions } = this.props;

    let listItems = items.map( item => {
      return (
        <Item key={item.id} content={item.content} actions={actions} />
      )
    });

    let formActions = [
      <FlatButton
        key="cancel"
        label="Cancel"
        secondary={true}
        onTouchTap={this._handleDialogCancel} />,
      <FlatButton
        key="save"
        label="Save"
        primary={true}
        onTouchTap={this._handleNewItemSubmit} />
    ];

    let itemForm = [
      <Dialog
        ref="ItemForm"
        title="New Item"
        actions={formActions}
        actionFocus="submit"
        autoDetectWindowHeight={true}>

        <TextField floatingLabelText="Content" type="text" name="content" fullWidth={true} ref="content" />
      </Dialog>
    ];


    return (
     <Paper style={{
        margin: '2% auto',
        width: '80%'
      }} zDepth={5}>

        {itemForm}

        <List subheader={list.title}
          subheaderStyle={{fontSize: "2em", textAlign: "center"}}>

          <ListItem
            key="actions"
            disabled={true}
            primaryText={
              <RaisedButton
                label="New Item"
                primary={true}
                onClick={this._newItem} />}
          />

          {listItems}
        </List>
      </Paper>
    );
  }

  _newItem = () => {
    this.refs.ItemForm.show();
  }

  _handleDialogCancel = () => {
    this.refs.ItemForm.dismiss();
  }

  _handleNewItemSubmit = () => {
    let content = this.refs.content.getValue();
    this.props.actions.createItem(content, this.props.list.id)
    this._handleDialogCancel();
  }
};
