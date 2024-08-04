import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderedFoodPage } from './ordered-food.page';

const routes: Routes = [
  {
    path: '',
    component: OrderedFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderedFoodPageRoutingModule {}
