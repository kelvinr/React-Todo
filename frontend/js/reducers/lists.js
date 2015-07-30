import { LOAD_LISTS } from '../constants';

const initialState = {
  lists: []
};

export default function lists(state = initialState, action) {

  switch(action.type) {
    case LOAD_LISTS:
      return {
        ...state,
        lists: action.json
      }

    default:
      return state;
  }
};
