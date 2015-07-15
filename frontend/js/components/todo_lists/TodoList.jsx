import React from 'react';
import { ListItem } from 'material-ui';

export default class TodoList extends React.Component {

  render() {
    return (
      <ListItem primaryText={this.props.title} />
    );
  }
};
