import React from 'react';
import { shallow } from 'enzyme';
import SideMenu from './SideMenu';

const setup = (propOverrides?: object) => {
  const props = Object.assign(
    {
      collapsed: false,
      collapseSideMenu: jest.fn(),
      showSideMenu: jest.fn(),
    },
    propOverrides
  );

  return shallow(<SideMenu {...props} />);
};

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
