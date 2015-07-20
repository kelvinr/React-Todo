import React from 'react';
import TodoList from './TodoList';
import { List, ListItem, RaisedButton, Paper} from 'material-ui';

export default class TodoLists extends React.Component {
  render() {
    let lists = this.props.lists.map( list => {
      return (
        <TodoList key={list.id} id={list.id} title={list.title} description={list.description} />
      ); 
    })

    return (
      <Paper style={{
        margin: '2% auto',
        width: '80%'
      }} zDepth={5}>
        <List>
          <ListItem disabled={true}
            primaryText={
              <RaisedButton 
                label="New Todo List"
                primary={true}
                onClick={this.props.newList}/>}
              />

          {lists}
        </List>
     </Paper>
    );
  }

};
