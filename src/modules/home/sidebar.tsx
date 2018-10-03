import * as React from 'react';
import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import SidebarSubTitle from '../core/components/SidebarSubTitle';
import { withRouter, RouteComponentProps } from 'react-router';

const HomeSidebar: React.SFC<RouteComponentProps> = ({ match }) => (
  <SidebarSub titleElement={<SidebarSubTitle>Sidebar</SidebarSubTitle>}>
    <SidebarSubMenu exact to={`/first-demo/`}>
      First Page
    </SidebarSubMenu>
    <SidebarSubMenu to={`/first-demo/second`}>Second Page</SidebarSubMenu>
    <SidebarSubMenu to={`/first-demo/third`}>Third Page</SidebarSubMenu>
  </SidebarSub>
);

export default withRouter(HomeSidebar);
