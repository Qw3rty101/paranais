import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordered-food',
  templateUrl: './ordered-food.page.html',
  styleUrls: ['./ordered-food.page.scss'],
})
export class OrderedFoodPage implements OnInit {
  orderedFood = [
    { name: 'Nasi Goreng', price: 25000 },
    { name: 'Ayam Bakar', price: 30000 },
    { name: 'Sate Ayam', price: 20000 }
  ];

  constructor() { }

  ngOnInit() {
  }
}
