import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { RiderOrdersComponent } from './pages/Rider/RiderOrders/RiderOrders.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule),
         
      }, {
        path: 'rider',
        loadChildren: () => import('./pages/Rider/Rider.module').then(m => m.RiderModule)
      },
      {
        path: 'consumer',
        loadChildren: () => import('./pages/Consumers/Consumers.module').then(m => m.ConsumersModule)
      },
      {
        path: 'resturants',
        loadChildren: () => import('./pages/Restaurant/Restaurant.module').then(m => m.RestaurantModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/FairAndPercentage/FairAndPercentage.module').then(m => m.FairAndPercentageModule)
      },  {
        path: 'resturantreview', redirectTo: 'resturants/resturantreview/:ResturantId', pathMatch: 'full'
     
      },
      {
        path: 'payments',
        loadChildren: () => import('./pages/Payments/Payments.module').then(m => m.PaymentsModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./pages/SupportMessages/SupportMessages.module').then(m => m.SupportMessagesModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./pages/Order/Order.module').then(m => m.OrderModule)
      },
      {
        path: 'claims',
        loadChildren: () => import('./pages/ClaimsAndDisputes/ClaimsAndDisputes.module').then(m => m.ClaimsAndDisputesModule)
      },
      // {
      //   path: 'systemsettings',
      //   loadChildren: () => import('./pages/DeliveryFairAndPercentage/DeliveryFairAndPercentage.module').then(m => m.DeliveryFairAndPercentageModule)
      // },
      {
        path: 'riderorders', redirectTo: 'rider/riderorders', pathMatch: 'full'
     
      },
     
    
      {
        path: 'orderreviews', redirectTo: 'order/orderreviews', pathMatch: 'full'
     
      },
      {
        path: 'paymentclearance', redirectTo: 'payments/paymentclearance', pathMatch: 'full'
     
      },
    
      {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      },
       {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module')
        .then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }

    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
