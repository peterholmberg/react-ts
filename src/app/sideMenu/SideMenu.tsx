import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SideMenuTop from './components/sideMenuTop/SideMenuTop';
import { collapseSideMenu, showSideMenu } from './actions';
import { getCollapsed } from './selectors';
import style from './SideMenu.scss';

interface SideMenuProps {
  collapsed: boolean;
  collapseSideMenu: () => void;
  showSideMenu: () => void;
}

class SideMenu extends PureComponent<SideMenuProps, any> {
  toggleSideMenu = () => {
    const { collapsed, collapseSideMenu, showSideMenu } = this.props;

    if (collapsed) {
      showSideMenu();
    } else {
      collapseSideMenu();
    }
  };

  render() {
    const { collapsed } = this.props;

    const sideMenuStyle = classNames({
      [style.sideMenu]: true,
      [style.collapsed]: collapsed,
    });

    const collapseIcon = collapsed ? '>' : '<';

    return (
      <div className={sideMenuStyle}>
        <Link className={style.icon} to={'/'}>
          <img
            width="30"
            src="https://play.grafana.org/public/img/grafana_icon.svg"
            alt="grafana-icon"
          />
        </Link>
        <button className={style.collapse} onClick={this.toggleSideMenu}>
          {collapseIcon}
        </button>
        <SideMenuTop />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    collapsed: getCollapsed(state),
  };
}

export default connect(
  mapStateToProps,
  {
    collapseSideMenu,
    showSideMenu,
  }
)(SideMenu);
