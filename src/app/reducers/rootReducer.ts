import { combineReducers } from 'redux';
import appState from './appReducer.ts';
import sideMenuReducer from '../sideMenu/reducer';

const rootReducer = combineReducers({
  appState,
  sideMenuReducer,
});

export default rootReducer;
