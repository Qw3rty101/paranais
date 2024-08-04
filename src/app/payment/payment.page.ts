import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RoomsService } from '../services/rooms.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {
  selectedPaymentMethod: string | undefined;

  constructor(
    private alertController: AlertController,
    private roomsService: RoomsService,
    private navCtrl: NavController
  ) {}

  async makePayment() {
    switch (this.selectedPaymentMethod) {
      case 'card':
        this.processCardPayment();
        break;
      case 'dana':
        this.processDanaPayment();
        break;
      case 'gopay':
        this.processGopayPayment();
        break;
      case 'bank':
        this.processBankPayment();
        break;
      default:
        alert('Silakan pilih metode pembayaran.');
    }
  }

  data() {
    // Mengambil data dari localStorage
    const storedOrderString = localStorage.getItem('order');

    // Mengonversi string JSON menjadi objek
    const orderData = storedOrderString
      ? JSON.parse(storedOrderString)
      : {
          id: undefined,
          id_user: undefined,
          checkin: '',
          checkout: '',
        };

    console.log(orderData);

    this.roomsService.reserveRoom(orderData).subscribe(
      (response) => {
        console.log('Reservation successful:', response);
      },
      (error) => {
        console.error('Error reserving room:', error);
      }
    );
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Pembayaran Berhasil',
      message: 'Pembayaran Anda telah berhasil diproses.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async processCardPayment() {
    await this.data();
    await this.showSuccessAlert();
    this.navCtrl.navigateForward('/booked-rooms');
  }

  async processDanaPayment() {
    await this.data();
    await this.showSuccessAlert();
    this.navCtrl.navigateForward('/booked-rooms');
  }

  async processGopayPayment() {
    await this.data();
    await this.showSuccessAlert();
    this.navCtrl.navigateForward('/booked-rooms');
  }

  async processBankPayment() {
    await this.data();
    await this.showSuccessAlert();
    this.navCtrl.navigateForward('/booked-rooms');
  }
}
