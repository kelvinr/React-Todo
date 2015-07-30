import React from 'react';
import ListItems from './ListItems';

export default class ListView extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  render() {
    return (
      <ListItems></ListItems>
    );
  }
};
