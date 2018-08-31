import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { AppContainer } from 'react-hot-loader';
var render = function (Component) {
    ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(Component, null)), document.getElementById('app'));
};
render(App);
if (module.hot) {
    module.hot.accept('./app', function () {
        var App = require('./app').default;
        render(App);
    });
}
//# sourceMappingURL=client.js.map