import ServerActionCreators from '../actions/ServerActionCreators';
import TodoConstants from '../constants/TodoConstants';
import request from 'superagent';

let APIEndpoints = TodoConstants.APIEndpoints;

export default {

  loadTodoLists() {
    request.get(APIEndpoints.TODO_LISTS)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          let json = JSON.parse(res.text);
          ServerActionCreators.receiveTodoLists(json);
        }
      });
  }
};
