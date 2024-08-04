import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodPaymentPageRoutingModule } from './food-payment-routing.module';

import { FoodPaymentPage } from './food-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodPaymentPageRoutingModule
  ],
  declarations: [FoodPaymentPage]
})
export class FoodPaymentPageModule {}
