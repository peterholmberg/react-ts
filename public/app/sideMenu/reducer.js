import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import * as ActionTypes from './actions';
var defaultState = fromJS({
    collapsed: false,
});
var sideMenuReducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    if (action === void 0) { action = null; }
    switch (action.type) {
        case ActionTypes.COLLAPSE_SIDE_MENU:
            return state.merge({ collapsed: true });
        case ActionTypes.SHOW_SIDE_MENU:
            return state.merge({ collapsed: false });
        default:
            return state;
    }
};
var reducer = combineReducers({
    sideMenu: sideMenuReducer,
});
export default reducer;
//# sourceMappingURL=reducer.js.map