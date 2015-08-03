import React, { PropTypes } from 'react';
import { ListItem, Checkbox } from 'material-ui';

export default class Item extends React.Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {checked: false}
  }

  getStyles() {
    return {
      checked: {
        color: 'grey',
        textDecoration: 'line-through'
      }
    }
  }

  render() {
    const { content, id } = this.props;
    let styles = this.getStyles();
    let checked = this.state.checked ? styles.checked : {}; 

    return (
      <ListItem
        key={id}
        style={checked}
        leftCheckbox={<Checkbox onCheck={this._onCheck} />}
        primaryText={content} />
    )
  }

  _onCheck = () => {
    this.setState({checked: !this.state.checked});
  }
};
