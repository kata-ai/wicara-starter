import { SidebarMainMenu } from 'interfaces/types';

const menus: Record<string, SidebarMainMenu> = {
  first: {
    title: 'Home',
    path: '/first-demo',
    icon: 'docs'
  },
  second: {
    title: 'About',
    path: '/second-demo',
    icon: 'dictionary'
  }
};

export { menus };
