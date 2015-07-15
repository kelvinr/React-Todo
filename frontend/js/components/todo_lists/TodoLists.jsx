import React from 'react';
import TodoList from './TodoList';
import MobileTearSheet from '../layout/MobileTearSheet';
import { List } from 'material-ui';

export default class TodoLists extends React.Component {
  render() {
    let lists = this.props.lists.map( list => {
      return (
        <TodoList key={list.id} title={list.title} description={list.description} />
      ); 
    })
    
    console.log(lists);
    return (
      <MobileTearSheet>
        <List subheader="Todo Lists">
          {lists}
        </List>
      </MobileTearSheet>
    );
  }
};
