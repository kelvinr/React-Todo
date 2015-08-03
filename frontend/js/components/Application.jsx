import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { AppBar, AppCanvas, Styles, FlatButton } from 'material-ui';
let { Spacing } = Styles;

export default class Application extends React.Component {
  
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <AppCanvas>
        <AppBar title="Todos" iconElementRight={<FlatButton linkButton={true} href="/" label="Back" />} />

        <div style={{paddingTop: Spacing.desktopKeylineIncrement}}>
          {this.props.children}
        </div>

      </AppCanvas>
    );
  }
};
