import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }
  ngOnInit() {
  }

  goToLoginPage(){
    localStorage.clear();
      this.router.navigate(['login']);
  }

}

