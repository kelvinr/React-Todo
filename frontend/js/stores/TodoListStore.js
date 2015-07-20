import TodoDispatcher from '../dispatcher/TodoDispatcher';
import { ActionTypes } from '../constants/TodoConstants';
import assign from 'object-assign';
import { EventEmitter } from 'events';

let CHANGE_EVENT = 'change';

let _todo_lists = [];
let _list = {}
let _list_items = [];
let _errors = [];

let TodoListStore = assign({}, EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll() {
    return _todo_lists;
  },

  getList() {
    return _list;
  },

  getItems() {
    return _list_items;
  }
});

TodoListStore.dispatchToken = TodoDispatcher.register( payload => {
  let action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_TODO_LISTS:
      _todo_lists = action.json;
      TodoListStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CREATED_TODO_LIST:
      if (action.json) {
        _todo_lists.unshift(action.json);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      TodoListStore.emitChange();
      break;

    case ActionTypes.RECEIVE_LIST:
      _list = action.json[0];
      _list_items = action.json[1];
      TodoListStore.emitChange();
  }

  return true;
});

export { TodoListStore as default };
