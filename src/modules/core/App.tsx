import * as React from 'react';
import {
  Switch,
  Route,
  RouteComponentProps,
  withRouter,
  Redirect
} from 'react-router-dom';
import { OutlineButton } from '@wicara/core';

import {
  Wrapper,
  Content,
  Topbar,
  SidebarAndContent,
  Sidebar,
  SidebarMain,
  SidebarMainMenu
} from 'components/layout';
import { Robot } from 'components/loading';

import Logo from './components/Logo';

import * as sidebar from './sidebar';
import HomeSidebar from '../home/sidebar';

const HomeModule = React.lazy(() => import('../home'));
const AboutModule = React.lazy(() => import('../about'));

class App extends React.Component<RouteComponentProps> {
  public render() {
    const currLoc = this.getCurrentLocation();

    return (
      <Wrapper>
        <Topbar
          logoContent={<Logo />}
          leftContent={
            <OutlineButton style={{ width: 192 }} icon="arrow-left">
              Back
            </OutlineButton>
          }
        >
          TopbarRight
        </Topbar>
        <SidebarAndContent hasTop>
          <Sidebar hasTop collapsed={this.isSidebarCollapsed()}>
            <SidebarMain hasTop>
              {Object.keys(sidebar.menus).map(menu => (
                <React.Fragment key={menu}>
                  <SidebarMainMenu
                    exact={sidebar.menus[menu].isExact}
                    to={sidebar.menus[menu].path}
                    icon={sidebar.menus[menu].icon}
                  >
                    {sidebar.menus[menu].title}
                  </SidebarMainMenu>
                </React.Fragment>
              ))}
            </SidebarMain>
            {!this.isSidebarCollapsed() && currLoc
              ? this.getSidebarSub(currLoc)
              : null}
          </Sidebar>
          <Content>
            <React.Suspense fallback={<Robot />}>
              <Switch>
                <Route path="/first-demo" component={HomeModule} />
                <Route path="/second-demo" component={AboutModule} />
                <Route render={() => <Redirect to="/first-demo" />} />
              </Switch>
            </React.Suspense>
          </Content>
        </SidebarAndContent>
      </Wrapper>
    );
  }

  private isSidebarCollapsed() {
    return this.props.location.pathname.search(/first-demo/) === -1;
  }

  private getCurrentLocation() {
    const locations =
      this.props.location && this.props.location.pathname
        ? this.props.location.pathname.split('/')
        : [];
    return locations.length > 1 ? locations[1] : undefined;
  }

  private getSidebarSub(location: string) {
    switch (location) {
      case 'first-demo': {
        return <HomeSidebar />;
      }
      default: {
        return null;
      }
    }
  }
}

export default withRouter(App);
