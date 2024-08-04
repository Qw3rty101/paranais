import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor(private alertController: AlertController) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Password dan konfirmasi password tidak cocok',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Implementasi logika registrasi di sini
    const alert = await this.alertController.create({
      header: 'Registrasi Berhasil',
      message: `Registrasi untuk ${this.email} berhasil`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
