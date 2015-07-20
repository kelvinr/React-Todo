import React from 'react';
import TodoListView from '../todo_lists/TodoListView';
import { AppBar, AppCanvas, Styles } from 'material-ui';
import { RouteHandler } from 'react-router'

let ThemeManager = new Styles.ThemeManager();
let { Spacing, Typography } = Styles;
ThemeManager.setTheme(ThemeManager.types.LIGHT);

export default class App extends React.Component {
  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  render() {
    return (
      <AppCanvas>
        <AppBar title="Todos" showMenuIconButton={false} />

        <div style={{paddingTop: Spacing.desktopKeylineIncrement}}>
          <RouteHandler />
        </div>

      </AppCanvas>
    );
  }
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
