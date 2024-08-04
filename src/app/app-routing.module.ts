import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'beranda',
    loadChildren: () => import('./pages/beranda/beranda.module').then(m => m.BerandaPageModule)
  },
  {
    path: 'akun',
    loadChildren: () => import('./akun/akun.module').then(m => m.AkunPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsPageModule)
  },
  {
    path: 'reservation/:id',
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'booked-rooms',
    loadChildren: () => import('./booked-rooms/booked-rooms.module').then( m => m.BookedRoomsPageModule)
  },
  {
    path: 'food-list',
    loadChildren: () => import('./food-list/food-list.module').then( m => m.FoodListPageModule)
  },
  {
    path: 'food-reservation/:id',
    loadChildren: () => import('./food-reservation/food-reservation.module').then( m => m.FoodReservationPageModule)
  },
  {
    path: 'food-payment',
    loadChildren: () => import('./food-payment/food-payment.module').then( m => m.FoodPaymentPageModule)
  },
  {
    path: 'ordered-food',
    loadChildren: () => import('./ordered-food/ordered-food.module').then( m => m.OrderedFoodPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
