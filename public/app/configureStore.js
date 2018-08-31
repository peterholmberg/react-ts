import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer.ts';
var createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware), hasDevtools() ? window.devToolsExtension({ serialize: true }) : function (f) { return f; })(createStore);
export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}
function hasDevtools() {
    return (process.env.NODE_ENV !== 'production' && (typeof window.devToolsExtension !== 'undefined'));
}
//# sourceMappingURL=configureStore.js.map