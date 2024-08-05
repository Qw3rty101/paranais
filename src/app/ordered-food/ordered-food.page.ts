// src/app/pages/ordered-food/ordered-food.page.ts
import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../services/foods.service';

@Component({
  selector: 'app-ordered-food',
  templateUrl: './ordered-food.page.html',
  styleUrls: ['./ordered-food.page.scss'],
})
export class OrderedFoodPage implements OnInit {
  orderedFood: any[] = [];

  constructor(private foodsService: FoodsService) { }

  ngOnInit() {
    const userId = Number(localStorage.getItem('id_user')); // Ambil userId dari localStorage

    if (userId) {
      this.foodsService.getOrderedFood(userId).subscribe(
        response => {
          this.orderedFood = response; // Simpan data pesanan ke dalam orderedFood
        },
        error => {
          console.error('Error fetching ordered food', error);
        }
      );
    }
  }
}
