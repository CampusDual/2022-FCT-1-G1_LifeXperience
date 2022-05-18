import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },

  { id: 'users', name: 'USERS', icon: 'people', route: '/main/users' },
  { id: 'subscriptions', name: 'SUBSCRIPTIONS', icon: 'people', route: '/main/subscriptions' },
  { id: 'experiences', name: 'EXPERIENCES', icon: 'people', route: '/main/experiences' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
