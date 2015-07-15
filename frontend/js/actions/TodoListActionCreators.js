import TodoDispatcher from '../dispatcher/TodoDispatcher';
import TodoConstants from '../constants/TodoConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

let ActionTypes = TodoConstants.ActionTypes;

export default {

  loadTodoLists() {
    TodoDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TODO_LISTS
    });
    WebAPIUtils.loadTodoLists();
  }
};
