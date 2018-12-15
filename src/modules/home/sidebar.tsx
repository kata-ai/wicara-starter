import * as React from 'react';
import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import SidebarSubTitle from '../core/components/SidebarSubTitle';
import { withRouter, RouteComponentProps } from 'react-router';

const HomeSidebar: React.SFC<RouteComponentProps> = ({ match }) => (
  <SidebarSub titleElement={<SidebarSubTitle>Sidebar</SidebarSubTitle>}>
    <SidebarSubMenu asNavLink exact to={`/first-demo/`} icon="bot">
      First Page
    </SidebarSubMenu>
    <SidebarSubMenu asNavLink to={`/first-demo/second`} icon="nlu">
      Second Page
    </SidebarSubMenu>
    <SidebarSubMenu asNavLink to={`/first-demo/third`} icon="cms">
      Third Page
    </SidebarSubMenu>
  </SidebarSub>
);

export default withRouter(HomeSidebar);
