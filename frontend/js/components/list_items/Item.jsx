import React from 'react';
let MenuItem = require('material-ui/lib/menus/menu-item');
let MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
import { ListItem, IconButton, IconMenu, Styles } from 'material-ui';
let { Colors } = Styles;

export default class Item extends React.Component {
  render() {

    let iconButtonElement = (
      <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left">
      <MoreVertIcon color={Colors.grey400} />
      </IconButton>
    );

    let rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    );

    return (
      <ListItem primaryText={this.props.content} rightIconButton={rightIconMenu} />
    )
  }
};
