import TodoDispatcher from '../dispatcher/TodoDispatcher';
import { ActionTypes } from '../constants/TodoConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

export default {
  loadTodoLists() {
    TodoDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TODO_LISTS
    });
    WebAPIUtils.loadTodoLists();
  },

  loadList() {
    TodoDispatcher.handleViewAction({
      type: ActionTypes.LOAD_LIST
    });
    WebAPIUtils.loadList();
  },

  createTodoList(title, description) {
    TodoDispatcher.handleViewAction({
      type: ActionTypes.CREATE_TODO_LIST,
      title: title,
      description: description
    });
    WebAPIUtils.createTodoList(title, description);
  }
};
