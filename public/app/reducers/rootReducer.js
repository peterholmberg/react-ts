import { combineReducers } from 'redux';
import appState from './appReducer.ts';
import sideMenuReducer from '../sideMenu/reducer';
var rootReducer = combineReducers({
    appState: appState,
    sideMenuReducer: sideMenuReducer,
});
export default rootReducer;
//# sourceMappingURL=rootReducer.js.map