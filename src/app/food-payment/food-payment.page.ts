import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-food-payment',
  templateUrl: './food-payment.page.html',
  styleUrls: ['./food-payment.page.scss'],
})
export class FoodPaymentPage {
  amount: number = 1;
  paymentMethod: string | undefined;
  bankAccount: string | undefined;

  constructor(private alertController: AlertController) {}

  onPaymentMethodChange() {
    // Reset bank account if the payment method is not 'bank'
    if (this.paymentMethod !== 'bank') {
      this.bankAccount = '';
    }
  }

  async submitPayment() {
      const alert = await this.alertController.create({
      header: 'Pesanan Anda Segera Diantar!',
      message: `Jumlah: ${this.amount}`,
      buttons: ['OK']
    });
  

    await alert.present();
  }
}
