import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {
  nama: any;

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }
  ngOnInit() {
    const nama = localStorage.getItem('nama');
    this.nama = nama;
  }

  goToLoginPage(){
    localStorage.clear();
      this.router.navigate(['login']);
  }

}

