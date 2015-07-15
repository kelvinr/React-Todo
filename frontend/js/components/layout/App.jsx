import React from 'react';
import TodoListView from '../todo_lists/TodoListView';
import { AppBar, AppCanvas, MenuItem, LeftNav, Styles } from 'material-ui';
let ThemeManager = new Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

class App extends React.Component {
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
        <AppBar 
          title="Todos"
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} />

        <LeftNav ref="leftNav" menuItems={[]} docked={false} />
        <TodoListView />
      </AppCanvas>
    );
  }
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export { App as default };
