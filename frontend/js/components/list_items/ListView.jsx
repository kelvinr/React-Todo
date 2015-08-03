import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as ListActions from '../../actions/listActions';
import Items from './Items';

@connect(state => ({
  list: state.lists.list,
  items: state.lists.items
}))

export default class ListView extends React.Component {

  static propTypes = {
    list: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {
    const { list, items, dispatch } = this.props;
    const actions = bindActionCreators(ListActions, dispatch);

    return (
      <Items list={list} items={items} actions={actions} />
    );
  }
};
