import TodoConstants from '../constants/TodoConstants';
import { Dispatcher } from 'flux';
import assign from 'object-assign';

let PayloadSources = TodoConstants.PayloadSources;

let TodoDispatcher = assign(new Dispatcher(), {

  handleServerAction(action) {
    let payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction(action) {
    let payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload)
  }
});

export {TodoDispatcher as default};
