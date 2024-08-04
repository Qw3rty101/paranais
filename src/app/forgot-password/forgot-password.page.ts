import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string | undefined;

  constructor(private alertController: AlertController) {}

  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Reset Kata Sandi',
      message: `Instruksi untuk reset kata sandi telah dikirim ke ${this.email}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
