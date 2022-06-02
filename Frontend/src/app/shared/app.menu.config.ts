import {MenuItemLocale,MenuRootItem,} from 'ontimize-web-ngx';
import { ClientsCardComponent } from './clients-card/clients-card.component';
import { ExperienceBoxCardComponent } from './experience-box-card/experience-box-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'users', name: 'USERS', icon: 'supervised_user_circle', route: '/main/users' },
  {
    id: 'modules', name: 'MODULES', icon: 'remove_red_eye', opened: false,
    items: [
            { id: 'experience_box', name: 'EXPERIENCE_BOX', icon: 'rocket_launch', route:'/main/experience-boxes',component: ExperienceBoxCardComponent},
            { id: 'clients', name: 'CLIENTS', icon: 'people', route: '/main/clients',component: ClientsCardComponent},
            { id: 'experiences', name: 'EXPERIENCES', icon: 'travel_explore', route: '/main/experiences',component: ExperienceCardComponent},
            { id: 'payments', name: 'PAYMENTS', icon: 'attach_money', route: '/main/payments' }]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [
  ClientsCardComponent,
  ExperienceBoxCardComponent,
  ExperienceCardComponent
];

// export const MENU_ITEM_LOCALE: MenuItemLocale[] = [
//   { id: 'lang_es', name: 'LOCALE_es', icon: 'language', locale: 'es' },
//   { id: 'lang_en', name: 'LOCALE_en', icon: 'language', locale: 'en' }
// ]
