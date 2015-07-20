import React from 'react';
import Item from './Item';
import { List } from 'material-ui';

export default class ListItems extends React.Component {
  render() {

    let items = this.props.items.map( item => {
      return (
        <Item key={item.id} content={item.content} />
      )
    });

    return (
      <List>
        {items}
      </List>
    )
  }
};
