import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodReservationPage } from './food-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: FoodReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodReservationPageRoutingModule {}
