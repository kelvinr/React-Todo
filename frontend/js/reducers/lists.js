import { LOAD_LISTS, CREATE_LIST, EDIT_LIST, DELETE_LIST, LOAD_LIST, CREATE_ITEM, EDIT_ITEM, DELETE_ITEM } from '../constants';

const initialState = {
  lists: [],
  list: {},
  items: []
};

export default function lists(state = initialState, action) {

  switch(action.type) {

    case LOAD_LISTS:
      return {
        ...state,
        lists: action.json
      }

    case CREATE_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          action.json
        ]
      }

    case EDIT_LIST:
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === action.id ?
          { ...list, title: action.title, description: action.description } :
          list
        ) 
      }

    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.id)
      }

    case LOAD_LIST:
      return {
        ...state,
        list: action.json[0],
        items: action.json[1]
      }

    case CREATE_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.json
        ]
      }

    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.id ?
          { ...item, content: action.content } :
          item
        )
      }


    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }

    default:
      return state;
  }
};
