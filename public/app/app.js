import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from 'utils/history';
import configureStore from './configureStore';
import Root from 'containers/root';
import './styles/main.scss';
var store = configureStore();
var App = function () { return (React.createElement(Provider, { store: store },
    React.createElement(ConnectedRouter, { history: history },
        React.createElement(Root, null)))); };
export default App;
//# sourceMappingURL=app.js.map