import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },        
    ],
  },
  // {
  //   label: 'Users',
  //   main: [
  //     {
  //       state: 'consumer',
  //       short_label: 'B',
  //       name: 'Consumers',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
  //   ]
  // },
  // {
  //   label: 'Resturant Management',
  //   main: [
  //     {
  //       state: 'resturants',
  //       short_label: 'B',
  //       name: 'All Resturants',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
  //   ]
  // }, 
   {
    label: 'Riders Management',
    main: [
      {
        state: 'rider',
        short_label: 'P',
        name: 'Riders',
        type: 'link',
        icon: 'ti-map-alt'
      },
      // {
      //   state: 'riderorders',
      //   short_label: 'P',
      //   name: 'RiderOrders',
      //   type: 'link',
      //   icon: 'ti-map-alt'
      // }
    ]
  }
  ,  {
    label: 'System Settings',
    main: [
      {
        state: 'settings',
        short_label: 'P',
        name: 'Change System Settings',
        type: 'link',
        icon: 'ti-map-alt'
      }
    ]}
  // },
  // {
  //   label: 'Orders Management',
  //   main: [
  //     {
  //       state: 'order',
  //       short_label: 'B',
  //       name: 'All Orders',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     },
  //     {
  //       state: 'orderreviews',
  //       short_label: 'B',
  //       name: 'All Order Reviews',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
  //   ]
  // },

  // {
  //   label: 'Payments Management',
  //   main: [
  //     {
  //       state: 'payments',
  //       short_label: 'P',
  //       name: 'All Payments',
  //       type: 'link',
  //       icon: 'ti-map-alt'
  //     }
  //   ]
  // },
  // {
  //   label: 'Tables',
  //   main: [
  //     {
  //       state: 'bootstrap-table',
  //       short_label: 'B',
  //       name: 'Bootstrap Table',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
  //   ]
  // },
  // {
  //   label: 'Map And Extra Pages ',
  //   main: [
  //     {
  //       state: 'map',
  //       short_label: 'M',
  //       name: 'Maps',
  //       type: 'link',
  //       icon: 'ti-map-alt'
  //     },
  //     {
  //       state: 'authentication',
  //       short_label: 'A',
  //       name: 'Authentication',
  //       type: 'sub',
  //       icon: 'ti-id-badge',
  //       children: [
  //         {
  //           state: 'login',
  //           type: 'link',
  //           name: 'Login',
  //           target: true
  //         }, {
  //           state: 'registration',
  //           type: 'link',
  //           name: 'Registration',
  //           target: true
  //         }
  //       ]
  //     },
  //     {
  //       state: 'user',
  //       short_label: 'U',
  //       name: 'User Profile',
  //       type: 'link',
  //       icon: 'ti-user'
  //     }
  //   ]
  // },
  // {
  //   label: 'Products and features',
  //   main: [
  //     {
  //       state: 'products',
  //       short_label: 'P',
  //       name: 'Products',
  //       type: 'link',
  //       icon: 'ti-map-alt'
  //     }
  //   ]
  // },
  // {
  //   label: 'Other',
  //   main: [
  //     {
  //       state: '',
  //       short_label: 'M',
  //       name: 'Menu Levels',
  //       type: 'sub',
  //       icon: 'ti-direction-alt',
  //       children: [
  //         {
  //           state: '',
  //           name: 'Menu Level 2.1',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.2',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.2.2',
  //               target: true
  //             }
  //           ]
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.3',
  //           target: true
  //         }, {
  //           state: '',
  //           name: 'Menu Level 2.4',
  //           type: 'sub',
  //           children: [
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.1',
  //               target: true
  //             },
  //             {
  //               state: '',
  //               name: 'Menu Level 2.4.2',
  //               target: true
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       state: 'simple-page',
  //       short_label: 'S',
  //       name: 'Simple Page',
  //       type: 'link',
  //       icon: 'ti-layout-sidebar-left'
  //     }
  //   ]
  // }, {
  //   label: 'Support',
  //   main: [
  //     {
  //       state: 'Upgrade To Pro',
  //       short_label: 'U',
  //       external: 'https://codedthemes.com/item/guru-able-admin-template/',
  //       name: 'Upgrade To Pro',
  //       type: 'external',
  //       icon: 'ti-layout-list-post',
  //       target: true
  //     }
  //   ]
  // }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
