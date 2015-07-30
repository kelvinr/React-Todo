import React, { PropTypes } from 'react';
import { AppBar, AppCanvas, Styles } from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let ThemeManager = new Styles.ThemeManager();
let { Spacing, Typography } = Styles;
ThemeManager.setTheme(ThemeManager.types.LIGHT);

export default class Application extends React.Component {
  
  static propTypes = {
    children: PropTypes.any
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <AppCanvas>
        <AppBar title="Todos" showMenuIconButton={false} />

        <div style={{paddingTop: Spacing.desktopKeylineIncrement}}>
          {this.props.children}
        </div>

      </AppCanvas>
    );
  }
};

Application.childContextTypes = {
  muiTheme: PropTypes.object
};
