import keyMirror from 'keymirror';

const ROOT = process.env.NODE_ENV === 'development' ? "http://localhost:3000": "";

export default {

  APIEndpoints: {
    APIRoot: ROOT,
    TODO_LISTS: ROOT + "/todo_lists"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    LOAD_TODO_LISTS: null,
    RECEIVE_TODO_LISTS: null,
    CREATE_TODO_LIST: null,
    RECEIVE_CREATED_TODO_LIST: null,
    LOAD_LIST: null,
    RECEIVE_LIST: null
  })
};
