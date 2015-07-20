import React from 'react';
import { Checkbox, ListItem, rightIconMenu } from 'material-ui';
import { Link } from 'react-router'

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
      <ListItem style={checked} leftCheckbox={<Checkbox onCheck={this._onCheck} />}
      primaryText={<Link to="list" params={{id: this.props.id}}>{this.props.title}</Link>}
      secondaryText={this.props.description} secondaryTextLines={2}
      />
    );
  }
};
