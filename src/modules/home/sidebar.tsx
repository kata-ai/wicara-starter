import * as React from 'react';
import SidebarSubTitle from '../core/components/SidebarSubTitle';
import { withRouter, RouteComponentProps } from 'react-router';
import { SidebarSub, SidebarSubMenu } from 'components/layout';

const HomeSidebar: React.FC<RouteComponentProps> = ({ match }) => (
  <SidebarSub titleElement={<SidebarSubTitle>Sidebar</SidebarSubTitle>}>
    <SidebarSubMenu exact to={`/first-demo/`} icon="bot">
      First Page
    </SidebarSubMenu>
    <SidebarSubMenu to={`/first-demo/second`} icon="nlu">
      Second Page
    </SidebarSubMenu>
    <SidebarSubMenu to={`/first-demo/third`} icon="cms">
      Third Page
    </SidebarSubMenu>
  </SidebarSub>
);

export default withRouter(HomeSidebar);
