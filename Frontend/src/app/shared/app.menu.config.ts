import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'users', name: 'USERS', icon: 'people', route: '/main/users' },
  {
    id: 'modules', name: 'MODULES', icon: 'remove_red_eye', opened: false,
    items: [
            { id: 'packages', name: 'PACKAGES', icon: 'paid', route:'/main/packages'},
            { id: 'clients', name: 'CLIENTS', icon: 'people', route: '/main/clients'},
            { id: 'experiences', name: 'EXPERIENCES', icon: 'travel_explore', route: '/main/experiences'}]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
