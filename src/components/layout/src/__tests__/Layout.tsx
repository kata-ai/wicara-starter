import * as React from 'react';
import { render } from '@testing-library/react';

import { AppRoot, Topbar, SidebarSub } from '..';
import SidebarAndContent from '../components/SidebarAndContent';
import Sidebar from '../components/Sidebar';
import SidebarMain from '../components/SidebarMain';
import SidebarMainMenu from '../components/SidebarMainMenu';
import SidebarSubMenu from '../components/SidebarSubMenu';
import Content from '../components/Content';

describe('components/layout', () => {
  test('renders correctly', () => {
    const { container } = render(
      <AppRoot>
        <Topbar
          leftContent={
            <div style={{ width: '64px', textAlign: 'center' }}>Logo</div>
          }
        />
        <SidebarAndContent hasTop>
          <Sidebar hasTop>
            <SidebarMain>
              <SidebarMainMenu to="/" icon="bot">
                Menu
              </SidebarMainMenu>
              <SidebarMainMenu to="/" icon="bot">
                Menu
              </SidebarMainMenu>
              <SidebarMainMenu to="/" icon="bot">
                Menu
              </SidebarMainMenu>
            </SidebarMain>
            <SidebarSub titleElement={<h2>SidebarSubTitle</h2>}>
              <SidebarSubMenu to="/" icon="bot">
                SubMenu
              </SidebarSubMenu>
              <SidebarSubMenu to="/" icon="bot">
                SubMenu
              </SidebarSubMenu>
              <SidebarSubMenu to="/" icon="bot">
                SubMenu
              </SidebarSubMenu>
            </SidebarSub>
          </Sidebar>
          <Content>Content</Content>
        </SidebarAndContent>
      </AppRoot>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
