import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
jest.mock('react-redux', function () { return ({
    connect: function () { return function (params) { return params; }; },
}); });
//# sourceMappingURL=test-setup.js.map