import {
  MenuItemLocale,
  MenuRootItem,

} from 'ontimize-web-ngx';
import { ClientsCardComponent } from './clients-card/clients-card.component';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'users', name: 'USERS', icon: 'people', route: '/main/users' },
  {
    id: 'modules', name: 'MODULES', icon: 'remove_red_eye', opened: false,
    items: [
            { id: 'experience_box', name: 'EXPERIENCE_BOX', icon: 'paid', route:'/main/experience-boxes'},
            { id: 'clients', name: 'CLIENTS', icon: 'people', route: '/main/clients'},
            { id: 'experiences', name: 'EXPERIENCES', icon: 'travel_explore', route: '/main/experiences'}]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [
  ClientsCardComponent
];

// export const MENU_ITEM_LOCALE: MenuItemLocale[] = [
//   { id: 'lang_es', name: 'LOCALE_es', icon: 'language', locale: 'es' },
//   { id: 'lang_en', name: 'LOCALE_en', icon: 'language', locale: 'en' }
// ]
