import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import SideMenuTop from './components/sideMenuTop/SideMenuTop';
import { collapseSideMenu, showSideMenu } from './actions';
import { getCollapsed } from './selectors';
import style from './SideMenu.scss';
var SideMenu = /** @class */ (function (_super) {
    tslib_1.__extends(SideMenu, _super);
    function SideMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleSideMenu = function () {
            var _a = _this.props, collapsed = _a.collapsed, collapseSideMenu = _a.collapseSideMenu, showSideMenu = _a.showSideMenu;
            if (collapsed) {
                showSideMenu();
            }
            else {
                collapseSideMenu();
            }
        };
        return _this;
    }
    SideMenu.prototype.render = function () {
        var _a;
        var collapsed = this.props.collapsed;
        var sideMenuStyle = classNames((_a = {},
            _a[style.sideMenu] = true,
            _a[style.collapsed] = collapsed,
            _a));
        var collapseIcon = collapsed ? '>' : '<';
        return (React.createElement("div", { className: sideMenuStyle },
            React.createElement(Link, { className: style.icon, to: '/' },
                React.createElement("img", { width: "30", src: "https://play.grafana.org/public/img/grafana_icon.svg", alt: "grafana-icon" })),
            React.createElement("button", { className: style.collapse, onClick: this.toggleSideMenu }, collapseIcon),
            React.createElement(SideMenuTop, null)));
    };
    return SideMenu;
}(PureComponent));
function mapStateToProps(state) {
    return {
        collapsed: getCollapsed(state),
    };
}
export default connect(mapStateToProps, {
    collapseSideMenu: collapseSideMenu,
    showSideMenu: showSideMenu,
})(SideMenu);
//# sourceMappingURL=SideMenu.js.map