import TodoDispatcher from '../dispatcher/TodoDispatcher';
import TodoConstants from '../constants/TodoConstants';

let ActionTypes = TodoConstants.ActionTypes;
export default {

  receiveTodoLists(json) {
    TodoDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TODO_LISTS,
      json: json
    });
  }
};
