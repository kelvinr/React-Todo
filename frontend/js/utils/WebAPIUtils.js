import ServerActionCreators from '../actions/ServerActionCreators';
import { APIEndpoints } from '../constants/TodoConstants';
import request from 'superagent';

export default {
  loadTodoLists() {
    request.get(APIEndpoints.TODO_LISTS)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          ServerActionCreators.receiveTodoLists(res.body);
        }
      });
  },

  loadList() {
    let path = window.location.pathname;
    request.get(`${APIEndpoints.APIRoot}${path}`)
      .set('Accept', 'application/json')
      .end(function(error, res) {
        ServerActionCreators.receiveList(res.body);
      });
  },

  createTodoList(title, description) {
    request.post(APIEndpoints.TODO_LISTS)
      .set('Accept', 'application/json')
      .send({todo_list:{ title: title, description: description }})
      .end((error, res) =>{
        if (res) {
          if (res.error) {
            let errorMsgs = JSON.parse(res.text);
            ServerActionCreators.receiveCreatedTodoList(null, errorMsgs);
          } else {
            ServerActionCreators.receiveCreatedTodoList(res.body, null);
          }
        }
      });
  }
};
