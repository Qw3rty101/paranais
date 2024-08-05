import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FoodsService } from '../services/foods.service';

@Component({
  selector: 'app-food-payment',
  templateUrl: './food-payment.page.html',
  styleUrls: ['./food-payment.page.scss'],
})
export class FoodPaymentPage {
  amount: number | undefined;
  foodId: any = localStorage.getItem('idfood'); // Id makanan yang ingin dipesan
  userId: any = localStorage.getItem('id_user'); // Id pengguna yang melakukan pemesanan

  constructor(private alertController: AlertController, private foodsService: FoodsService) {}

  async submitPayment() {
    // Convert the values to integers
    const parsedFoodId = parseInt(this.foodId, 10);
    const parsedUserId = parseInt(this.userId, 10);
    const parsedAmount = this.amount ? parseInt(this.amount.toString(), 10) : undefined;

    if (parsedAmount && parsedFoodId && parsedUserId) {
      try {
        const response = await this.foodsService.orderFood(parsedUserId, parsedFoodId, parsedAmount).toPromise();
        const alert = await this.alertController.create({
          header: 'Pembayaran Berhasil',
          message: `Pesanan berhasil dibuat dengan total harga: Rp ${response.order.total_price}`,
          buttons: ['OK']
        });
        await alert.present();
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Pembayaran Gagal',
          message: 'Terjadi kesalahan saat memproses pesanan Anda. Silakan coba lagi.',
          buttons: ['OK']
        });
        console.log(parsedAmount)
        console.log(parsedFoodId)
        console.log(parsedUserId)
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Pembayaran Gagal',
        message: 'Jumlah pesanan harus diisi.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
