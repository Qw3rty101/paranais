import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Pastikan pathnya benar

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name_user: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor(private authService: AuthService, private alertController: AlertController) {}

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

    if (this.name_user && this.email && this.password) {
      this.authService.register(this.name_user, this.email, this.password).subscribe(async (response) => {
        if (response.error) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: response.error,
            buttons: ['OK']
          });
          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Registrasi Berhasil',
            message: `Registrasi untuk ${this.email} berhasil`,
            buttons: ['OK']
          });
          await alert.present();
          // Optionally, you can redirect the user or perform other actions
        }
      });
    }
  }
}
