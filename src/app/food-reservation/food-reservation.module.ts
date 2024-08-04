import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodReservationPageRoutingModule } from './food-reservation-routing.module';

import { FoodReservationPage } from './food-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodReservationPageRoutingModule
  ],
  declarations: [FoodReservationPage]
})
export class FoodReservationPageModule {}
