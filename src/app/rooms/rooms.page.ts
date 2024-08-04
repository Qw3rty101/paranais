import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  rooms = [
    { id: 1, name: 'Deluxe Room', description: 'A luxurious room with sea view.' },
    { id: 2, name: 'Standard Room', description: 'A comfortable room with all basic amenities.' },
    // Add more rooms as needed
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToReservation(roomId: number) {
    this.navCtrl.navigateForward(`/reservation`, {
      queryParams: { roomId: roomId }
    });
  }
}
