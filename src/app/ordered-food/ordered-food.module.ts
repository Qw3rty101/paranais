import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderedFoodPageRoutingModule } from './ordered-food-routing.module';

import { OrderedFoodPage } from './ordered-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderedFoodPageRoutingModule
  ],
  declarations: [OrderedFoodPage]
})
export class OrderedFoodPageModule {}
