import { ROOT, LOAD_LISTS, CREATE_LIST, EDIT_LIST, DELETE_LIST, LOAD_LIST, CREATE_ITEM, EDIT_ITEM, DELETE_ITEM } from '../constants';
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

function updateList(list) {
  let { id, title, description } = list;
  return {
    type: EDIT_LIST,
    id: id,
    title: title,
    description: description
  }
};

function createdItem(item) {
  return {
    type: CREATE_ITEM,
    json: item
  }
};

function deletedItem(id) {
  return {
    type: DELETE_ITEM,
    id: id
  }
};

function updateItem(item) {
  let { id, content } = item;
  return {
    type: EDIT_ITEM,
    id: id,
    content: content
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
    .send({todo_list: { title: title, description: description }})
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

export function editList(id, title, description) {
  return dispatch => {
    request.put(`${ROOT}/todo_lists/${id}`)
      .set('Accept', 'application/json')
      .send({todo_list: { title: title, description: description}})
      .end((error, res) => {
        if (res.error) {
          let errorMsgs = JSON.parse(res.text);
        } else {
          dispatch(updateList(res.body));
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

export function deleteItem(id, listId) {
  return dispatch => {
    request.del(`${ROOT}/todo_lists/${listId}/todo_items/${id}`)
      .set('Accept', 'application/json')
      .end((error, res) => {
        if (res) {
          dispatch(deletedItem(res.body));
        }
      });
  }
};

export function editItem(id, listId, content) {
  return dispatch => {
    request.put(`${ROOT}/todo_lists/${listId}/todo_items/${id}`)
      .set('Accept', 'application/json')
      .send({todo_item: { content: content }})
      .end((error, res) => {
        if (res.error) {
          let errorMsgs = JSON.parse(res.text);
        } else {
          dispatch(updateItem(res.body));
        }
      });
  }
};
