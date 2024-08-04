import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  roomId: number | undefined;
  roomDetails: any;
  name: string = '';
  email: string = '';
  id_user: any[] = [];
  checkin: string = new Date().toISOString();
  checkout: string = new Date().toISOString();

  rooms = [
    {
      id: 1,
      name: 'Kamar Deluxe',
      description: 'Kamar dengan pemandangan laut',
      price: 1000000,
      imageUrl: 'assets/img/room/room-1.jpg',
    },
    {
      id: 2,
      name: 'Kamar Superior',
      description: 'Kamar dengan pemandangan kota',
      price: 800000,
      imageUrl: 'assets/img/room/room-2.jpg',
    },
    {
      id: 3,
      name: 'Kamar Standar',
      description: 'Kamar nyaman dengan fasilitas standar',
      price: 600000,
      imageUrl: 'assets/img/room/room-3.jpg',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private roomsService: RoomsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(+id)) {
      this.roomId = +id;
      this.roomDetails = this.rooms.find((room) => room.id === this.roomId);
    } else {
      console.error('Invalid id parameter:', id);
    }

    const dataString = localStorage.getItem('data');
    if (dataString) {
      const userData = JSON.parse(dataString);
      this.name = userData.name_user;
      this.email = userData.email;
      this.id_user = userData.id_user;
    } else {
      console.error('Data pengguna tidak ditemukan di localStorage');
      localStorage.clear();
      this.router.navigate(['login']);
    }

    localStorage.setItem('id_user', String(this.id_user))

  }

  reserveRoom() {
    if (!this.name || !this.email || !String(this.checkin) || !this.checkout) {
      console.error('All fields are required');
      return;
    }
  
    console.log({
      id: this.roomId,
      checkin: this.checkin,
      checkout: this.checkout,
    });
  
    const orderData = {
      id: this.roomId,
      id_user: localStorage.getItem('id_user'),
      checkin: String(this.checkin),
      checkout: String(this.checkout),
    };

    localStorage.setItem('order' , JSON.stringify(orderData))
    
  
    // this.roomsService.reserveRoom(orderData).subscribe(
    //   (response) => {
    //     console.log('Reservation successful:', response);
        this.navCtrl.navigateForward('/payment');
    //   },
    //   (error) => {
    //     console.error('Error reserving room:', error);
    //   }
    // );
  }
  
}
