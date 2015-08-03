import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Checkbox, ListItem, IconButton, IconMenu, Styles } from 'material-ui';
let MenuItem = require('material-ui/lib/menus/menu-item');
let MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
let { Colors } = Styles;

export default class TodoList extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired
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

  _onCheck = () => {
    this.setState({checked: !this.state.checked});
  }

  render() {
    const { id, title, description } = this.props.list
    let styles = this.getStyles();
    let checked = this.state.checked ? styles.checked : {};

    let iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left">
        <MoreVertIcon color={Colors.grey400} />
      </IconButton>
    );

    let rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement} onItemTouchTap={this._handleMenuClick}>
        <MenuItem key="show" ref={id}>Show</MenuItem>
        <MenuItem key="edit" ref={id}>Edit</MenuItem>
        <MenuItem key="delete" ref={id}>Delete</MenuItem>
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

  _handleMenuClick = (e, item) => {
    if (item.key === "delete") {
     this.props.actions.deleteList(item.ref) 
    }
  }

  _onClick = () => {
    this.props.actions.loadList(this.props.list.id)
  }
};
