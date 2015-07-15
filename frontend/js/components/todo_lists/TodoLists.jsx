import React from 'react';
import TodoList from './TodoList';
import MobileTearSheet from '../layout/MobileTearSheet';
import { List, ListItem, RaisedButton} from 'material-ui';

export default class TodoLists extends React.Component {
  render() {
    let lists = this.props.lists.map( list => {
      return (
        <TodoList key={list.id} title={list.title} description={list.description} />
      ); 
    })

    return (
      <MobileTearSheet>
        <List>
          {lists}
          <ListItem disabled={true} primaryText={
            <RaisedButton 
              label="New Todo List"
              primary={true}
              onClick={this.props.newList}/>}
          />
        </List>
      </MobileTearSheet>
    );
  }

};
