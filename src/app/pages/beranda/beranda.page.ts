import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {
  rooms: any[] = [];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private roomsService: RoomsService
  ) {}

  ngOnInit() {
    // Memuat data pengguna dari localStorage
    const dataString = localStorage.getItem('data');
    if (dataString) {
      const userData = JSON.parse(dataString);
      console.log(userData)

      localStorage.setItem('nama', userData.name_user);
      localStorage.setItem('email', userData.email);
    } else {
      console.error('Data pengguna tidak ditemukan di localStorage');
      localStorage.clear();
      this.router.navigate(['login']);
    }

    // Memuat data rooms
    this.loadRooms();
  }

  loadRooms() {
    this.roomsService.getRooms().subscribe(
      (data) => {
        this.rooms = data; // Simpan data ke dalam variabel rooms
      },
      (error) => {
        console.error('Error fetching rooms', error);
      }
    );
  }

  goToReservation(roomId: number) {
    this.navCtrl.navigateForward(`/reservation/${roomId}`);
  }
}
