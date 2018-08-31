import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import * as ActionTypes from './actions';

const defaultState = fromJS({
  collapsed: false,
});

const sideMenuReducer = (state = defaultState, action = null) => {
  switch (action.type) {
    case ActionTypes.COLLAPSE_SIDE_MENU:
      return state.merge({ collapsed: true });
    case ActionTypes.SHOW_SIDE_MENU:
      return state.merge({ collapsed: false });
    default:
      return state;
  }
};

const reducer = combineReducers({
  sideMenu: sideMenuReducer,
});

export default reducer;
