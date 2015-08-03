import { ROOT, LOAD_LISTS, CREATE_LIST, EDIT_LIST, DELETE_LIST, LOAD_LIST, CREATE_ITEM } from '../constants';
import request from 'superagent';

function receiveLists(lists) {
  return {
    type: LOAD_LISTS,
    json: lists
  }
};

function receiveList(list) {
  return {
    type: LOAD_LIST,
    json: list 
  }
};

function createdList(list) {
  return {
    type: CREATE_LIST,
    json: list
  }
};

function deletedList(id) {
  return {
    type: DELETE_LIST,
    id: id
  }
};

function createdItem(item) {
  return {
    type: CREATE_ITEM,
    json: item
  }
};

export function loadLists() {
  return dispatch => {
    request.get(`${ROOT}/todo_lists`)
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (res) {
          dispatch(receiveLists(res.body));
        }
      });
  }
};

export function loadList(id) {
  return dispatch => {
    request.get(`${ROOT}/todo_lists/${id}`)
      .set('Accept', 'application/json')
      .end((error, res) => {
        if (res) {
          dispatch(receiveList(res.body));
        }
      });
  }
};

export function createList(title, description) {
  return dispatch => {
    request.post(`${ROOT}/todo_lists`)
    .set('Accept', 'application/json')
    .send({todo_list:{ title: title, description: description }})
    .end((error, res) => {
      if (res) {
        if (res.error) {
          let errorMsgs = JSON.parse(res.text);
        } else {
          dispatch(createdList(res.body));
        }
      }
    });
  }
};

export function deleteList(id) {
  return dispatch => {
    request.del(`${ROOT}/todo_lists/${id}`)
      .set('Accept', 'application/json')
      .end((error, res) => {
        if (res) {
          dispatch(deletedList(res.body))
        }
      });
  }
};

export function createItem(content, listId) {
  return dispatch => {
    request.post(`${ROOT}/todo_lists/${listId}/todo_items`)
      .set('Accept', 'application/json')
      .send({todo_item: { content: content }})
      .end((error, res) => {
        if (res) {
          if (res.error) {
            let errorMsgs = JSON.parse(res.text);
          } else {
            dispatch(createdItem(res.body));
          }
        }
      });
  }
};
