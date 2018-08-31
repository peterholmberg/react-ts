import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './home';
import Login from './login';
import SideMenu from '../sideMenu/SideMenu';

export default class Root extends PureComponent<{}, {}> {
  render() {
    return (
      <div className="app">
        <SideMenu key="sidemenu" />
        <div className="content-container" key="contentContainer">
          <div className="page-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
