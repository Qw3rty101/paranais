import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-food-reservation',
  templateUrl: './food-reservation.page.html',
  styleUrls: ['./food-reservation.page.scss'],
})
export class FoodReservationPage implements OnInit {
  foodId: number | undefined;
  selectedFood: any;
  foodItems: any[] = [
    {
      id: 1,
      name: 'Nasi Goreng',
      description: 'Nasi goreng dengan ayam dan sayuran.',
      price: 25000,
      imageUrl: 'assets/img/food/Nasi-Goreng-square-FS-57.jpg'
    },
    {
      id: 2,
      name: 'Mie Goreng',
      description: 'Mie goreng pedas dengan telur.',
      price: 20000,
      imageUrl: 'assets/img/food/1109062-resep-mie-goreng-spesial.jpg'
    },
    {
      id: 3,
      name: 'Sate Ayam',
      description: 'Sate ayam dengan saus kacang.',
      price: 30000,
      imageUrl: 'assets/img/food/799023755.jpg'
    }
  ];

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.foodId = +idParam;
      this.selectedFood = this.foodItems.find(food => food.id === this.foodId);
      if (!this.selectedFood) {
        console.error(`Food with ID ${this.foodId} not found.`);
      }
    } else {
      console.error('ID parameter not found in route.');
    }
  }
  
}
