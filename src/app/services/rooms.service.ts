import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl = environment.apiUrl;
  // private apiUrl = `${environment.apiUrl}/api`; // Sesuaikan dengan URL API Laravel Anda

  constructor(private http: HttpClient) { }

  // Method untuk mengambil semua data rooms
  getRooms(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/rooms');
  }

  getOrder(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/orders/' + localStorage.getItem('id_user'));
  }

  reserveRoom(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/orders`, orderData);
  }
}
