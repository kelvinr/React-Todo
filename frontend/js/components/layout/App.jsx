import React from 'react';
import TodoListView from '../todo_lists/TodoListView';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppBar, AppCanvas, Styles } from 'material-ui';
let { Colors, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

class App extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {

    return (
      <AppCanvas>
        <AppBar title="Todos" />
        <TodoListView />
      </AppCanvas>
    );
  }
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export { App as default };
