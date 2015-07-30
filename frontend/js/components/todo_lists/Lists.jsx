import React from 'react';
import List from './List';

export default class Lists extends React.Component {

  render() {

    let lists = this.props.lists.map( list => {
      return (
        <List key={list.id} list={list} />
      ); 
    })

    return (
      <ul>
        {lists}
      </ul>
    );
  }
};
