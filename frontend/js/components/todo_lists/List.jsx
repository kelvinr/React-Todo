import React from 'react';
import { Link } from 'react-router'

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {checked: false}
  }

  render() {
    return (
      <li className="collection-item">
        {this.props.list.title}
        <br />
        {this.props.list.description}
      </li>
    );
  }
};
