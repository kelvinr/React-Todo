import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Snackbar, TextField, Checkbox, ListItem, IconButton, IconMenu, Styles } from 'material-ui';
let MenuItem = require('material-ui/lib/menus/menu-item');
let MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
let { Colors } = Styles;


class ListRow extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    actions: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {checked: false}
  }

  getStyles() {
    return{
      checked: {
        color: 'grey',
        textDecoration: 'line-through'
      }
    }
  }

  render() {
    const { id, title, description } = this.props;

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
      leftCheckbox={
        <Checkbox onCheck={this._onCheck} />
      }
      primaryText={
        <Link to={`/todo_lists/${id}`} params={{id: id}} onClick={this._onClick}>{title}</Link>
      }
      secondaryText={description} secondaryTextLines={2}
      rightIconButton={rightIconMenu}
      />
    );
  }

  _onCheck = () => {
    this.setState({checked: !this.state.checked});
  }

  _handleMenuClick = (e, item) => {
    const { actions, id, edit } = this.props;

    if (item.key === "delete") {
     actions.deleteList(id) 
    } else if (item.key === "edit") {
      this.props.edit();
    } 
  }

  _onClick = () => {
    this.props.actions.loadList(this.props.id)
  }
};

class EditRow extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    actions: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired
  }

  render() {
    const { id, title, description } = this.props;

    return (
      <div>
        <TextField floatingLabelText="Title" defaultValue={title} fullWidth={true} name="title" ref="title" />
        <TextField floatingLabelText="Description" defaultValue={description} fullWidth={true} name="description" multiLine={true} ref="desc" />
        <Snackbar message="Edit mode" action="Update" onActionTouchTap={this._handleUpdate} openOnMount={true} />
      </div>
    );
  }

  _handleUpdate = () => {
    let title = this.refs.title.getValue();
    let description = this.refs.desc.getValue();
    this.props.actions.editList(this.props.id, title, description);
    this.props.edit();
  }
};

export default class TodoList extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {edit: false};
  }

  render() {
    const {actions, list: { id, title, description }} = this.props;

    if ( this.state.edit ) {
      return (
        <EditRow id={id} title={title} description={description} actions={actions} edit={this._handleEdit}/>
      )
    } else {
      return (
        <ListRow id={id} title={title} description={description} actions={actions} edit={this._handleEdit}/>
      )
    }
  }

  _handleEdit = () => {
    this.setState({edit: !this.state.edit});
  }
};
