import * as tslib_1 from "tslib";
import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from './SideMenu';
var setup = function (propOverrides) {
    var props = Object.assign({
        collapsed: false,
        collapseSideMenu: jest.fn(),
        showSideMenu: jest.fn(),
    }, propOverrides);
    return shallow(React.createElement(SideMenu, tslib_1.__assign({}, props)));
};
describe('Render', function () {
    it('should render component', function () {
        var wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=SideMenu.test.js.map