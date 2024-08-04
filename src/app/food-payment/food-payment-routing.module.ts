import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodPaymentPage } from './food-payment.page';

const routes: Routes = [
  {
    path: '',
    component: FoodPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodPaymentPageRoutingModule {}
