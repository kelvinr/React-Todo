import { ROOT, LOAD_LIST } from '../constants';

const initialState = {
  list: {},
  items: []
};

export default function listItems(state = initialState, action) {

  switch(action.type) {
    case LOAD_LIST:
      return {
        ...state,
        list: action.json[0],
        items: action.json[1]
    }

    default:
      return state;
  }
}


