import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFoods(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/foods');
  }

  orderFood(userId: number, foodId: number, quantity: number): Observable<any> {
    const body = {
      id_user: userId,
      food_id: foodId,
      quantity: quantity,
    };
    return this.http.post<any>(`${this.apiUrl}/api/orderfoods`, body);
  }

  getOrderedFood(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/orderfoods/${userId}`);
  }
}
