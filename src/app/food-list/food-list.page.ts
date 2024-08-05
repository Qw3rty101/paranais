import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FoodsService } from '../services/foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})
export class FoodListPage {
  foods: any[] = [];

  // foods = [
  //   {
  //     id: 1,
  //     name: 'Nasi Goreng',
  //     description: 'Nasi goreng dengan ayam dan sayuran.',
  //     price: 25000,
  //     imageUrl: 'assets/img/food/Nasi-Goreng-square-FS-57.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Mie Goreng',
  //     description: 'Mie goreng pedas dengan telur.',
  //     price: 20000,
  //     imageUrl: 'assets/img/food/1109062-resep-mie-goreng-spesial.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'Sate Ayam',
  //     description: 'Sate ayam dengan saus kacang.',
  //     price: 30000,
  //     imageUrl: 'assets/img/food/799023755.jpg'
  //   }
  // ];

  constructor(private navCtrl: NavController, private foodServices: FoodsService) {}

  ngOnInit() {
    this.loadFoods();
  }

  loadFoods() {
    this.foodServices.getFoods().subscribe(
      (data) => {
        this.foods = data; // Simpan data ke dalam variabel rooms
        console.log(this.foods)
      },
      (error) => {
        console.error('Error fetching rooms', error);
      }
    );
  }

  goToFoodReservation(foodId: number) {
    localStorage.setItem('idfood', `${foodId}`)
    this.navCtrl.navigateForward(`/food-reservation/${foodId}`);
  }
}
