import React from 'react';
import { Checkbox, ListItem } from 'material-ui';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this._onCheck = this._onCheck.bind(this);
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

  _onCheck() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    let styles = this.getStyles();
    let checked = this.state.checked ? styles.checked : {}; 

    return (
      <ListItem style={checked} leftCheckbox={<Checkbox onCheck={this._onCheck}/>} primaryText={this.props.title} secondaryText={this.props.description} secondaryTextLines={2}/>
    );
  }
};
