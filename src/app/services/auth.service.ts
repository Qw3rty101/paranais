import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(name_user: string, email: string, password: string): Observable<any> {
    const body = {
      name_user: name_user,
      email: email,
      password: password,
    };

    return this.http
      .post<any>(`${this.apiUrl}/api/register`, body)
      .pipe(catchError(this.handleError<any>('register')));
  }

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };

    return this.http
      .post<any>(`${this.apiUrl}/api/login`, body)
      .pipe(catchError(this.handleError<any>('login')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Menampilkan pesan kesalahan di konsol
      console.error(error.error.message);
      // Mengembalikan observable dengan pesan kesalahan
      return of({ error: error.error.message } as T);
    };
  }
}
