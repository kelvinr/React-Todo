import React from 'react';
import Item from './Item';

export default class ListItems extends React.Component {
  render() {

    let items = this.props.items.map( item => {
      return (
        <Item key={item.id} content={item.content} />
      )
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
};
