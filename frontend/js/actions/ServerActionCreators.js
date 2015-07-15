import TodoDispatcher from '../dispatcher/TodoDispatcher';
import { ActionTypes } from '../constants/TodoConstants';

export default {
  receiveTodoLists(json) {
    TodoDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TODO_LISTS,
      json: json
    });
  },

  receiveCreatedTodoList(json, errors) {
    TodoDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_TODO_LIST,
      json: json,
      errors: errors
    });
  }
};
