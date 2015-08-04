import React, { PropTypes } from 'react';
import { IconMenu, IconButton, TextField, Snackbar, ListItem, Checkbox, Styles } from 'material-ui';
let MenuItem = require('material-ui/lib/menus/menu-item');
let MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
let { Colors } = Styles;

class ItemRow extends React.Component {

  static propTypes = {
    id: PropTypes.number,
    content: PropTypes.string,
    listId: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {checked: false}
  }

  getStyles() {
    return {
      checked: {
        color: 'grey',
        textDecoration: 'line-through'
      }
    }
  }

  render() {
    let styles = this.getStyles();
    let checked = this.state.checked ? styles.checked : {}; 

    let iconButtonElement = (
      <IconButton
        tooltip="more"
        tooltipPosition="bottom-left">
        <MoreVertIcon color={Colors.grey400} />
      </IconButton>
    );

    let rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement} onItemTouchTap={this._handleMenuClick}>
        <MenuItem key="edit">Edit</MenuItem>
        <MenuItem key="delete">Delete</MenuItem>
      </IconMenu>
    );

    return (
      <ListItem
        style={checked}
        leftCheckbox={<Checkbox onCheck={this._onCheck} />}
        primaryText={this.props.content}
        rightIconButton={rightIconMenu}/>
    );
  }

  _handleMenuClick = (e, item) => {
    const { actions, id, listId, edit } = this.props;

    if (item.key === "delete") {
      actions.deleteItem(id, listId); 
    } else if (item.key === "edit") {
      edit();
    } 
  }

  _onCheck = () => {
    this.setState({checked: !this.state.checked});
  }
}

class ItemEdit extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    content: PropTypes.string,
    listId: PropTypes.number.isRequired,
    edit: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <TextField floatingLabelText="Content" defaultValue={this.props.content} fullWidth={true} name="content" ref="content" />
        <Snackbar message="Edit mode" action="Update" onActionTouchTap={this._handleUpdate} openOnMount={true} />
      </div>
    )
  }

  _handleUpdate = () => {
    let { id, listId, actions, edit } = this.props

    let content = this.refs.content.getValue();
    actions.editItem(id, listId, content);
    edit();
  }
}

export default class Item extends React.Component {

  static propTypes = {
    listId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {edit: false};
  }

  render() {
    const { actions, id, listId, content } = this.props;

    if ( this.state.edit ) {
      return (
        <ItemEdit id={id} listId={listId} content={content} edit={this._handleEdit} actions={actions} /> 
      )
    } else {
      return (
        <ItemRow id={id} listId={listId} content={content} edit={this._handleEdit} actions={actions} /> 
      )
    }
  }

  _handleEdit = () => {
    this.setState({edit: !this.state.edit});
  }
};
