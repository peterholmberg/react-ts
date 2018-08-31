import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';
import SideMenu from '../sideMenu/SideMenu';
var Root = /** @class */ (function (_super) {
    tslib_1.__extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        return (React.createElement("div", { className: "app" },
            React.createElement(SideMenu, { key: "sidemenu" }),
            React.createElement("div", { className: "content-container", key: "contentContainer" },
                React.createElement("div", { className: "page-content" },
                    React.createElement(Switch, null,
                        React.createElement(Route, { exact: true, path: "/", component: Home }),
                        React.createElement(Route, { exact: true, path: "/login", component: Login }))))));
    };
    return Root;
}(PureComponent));
export default Root;
//# sourceMappingURL=root.js.map