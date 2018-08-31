import { fromJS } from 'immutable';
var defaultState = fromJS({
    networkFailed: false,
    networkProgress: false,
    allurbaserbelongtous: 'Yes',
});
var appState = function (state, action) {
    if (state === void 0) { state = defaultState; }
    if (action === void 0) { action = null; }
    switch (action.type) {
        default:
            return state;
    }
};
export default appState;
//# sourceMappingURL=appReducer.js.map