import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.page.html',
  styleUrls: ['./booked-rooms.page.scss'],
})
export class BookedRoomsPage implements OnInit {
  rooms: any[] = [];
  

  constructor(private roomsService: RoomsService) { }

  ngOnInit() {
    this.loadRooms();
  }

  loadRooms() {
    this.roomsService.getOrder().subscribe(
      (data) => {
        this.rooms = data; // Simpan data ke dalam variabel rooms
      },
      (error) => {
        console.error('Error fetching rooms', error);
      }
    );
  }
}
