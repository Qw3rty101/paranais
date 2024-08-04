import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    email: '',
    password: '',
  };

  type: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
  }

  changeType() {
    this.type = !this.type;
  }

  async goToBeranda() {
    const { email, password } = this.login;

    if (!email || !password) {
      // Menampilkan alert jika ada kolom yang kosong
      const alert = await this.alertController.create({
        header: 'Pesan',
        message: 'Email and Password are required!',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    this.authService.login(email, password).subscribe(
      async (response) => {
        if (response.error) {
          // Menampilkan alert jika ada kesalahan
          const alert = await this.alertController.create({
            header: 'Pesan',
            message: response.error,
            buttons: ['OK'],
          });
          await alert.present();
        } else if (response.message === 'Login successful') {
          console.log(response);
          localStorage.setItem('email', response.email_user);
          localStorage.setItem('data', JSON.stringify(response.user)); // Simpan token dari respons jika ada
          this.router.navigate(['/tabs/beranda']);
        } else {
          const alert = await this.alertController.create({
            header: 'Error',
            message: response.message,
            buttons: ['OK'],
          });
          await alert.present();
        }
      },
      async (error) => {
        // Menampilkan alert jika terjadi kesalahan jaringan atau kesalahan lain
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Login failed. Please try again.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }

  goToForget() {
    console.log('Forget');
    this.router.navigate(['/forgot-password']);
  }

  gmailLogin() {
    console.log('Gmail');
    this.router.navigate(['setting']);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}
