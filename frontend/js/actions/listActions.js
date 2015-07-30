import { ROOT, LOAD_LISTS } from '../constants';
import request from 'superagent';

export function receiveLists(lists) {
  return {
    type: LOAD_LISTS,
    json: lists
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
