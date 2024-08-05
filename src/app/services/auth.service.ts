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
      if(error.error.message) {

        console.error(error.error.message);
        return of({ error: error.error.message } as T);
      } else {
        console.error('Too Many Req')
        return of({ error: 'Too Many Request!' } as T);
      }
      // Mengembalikan observable dengan pesan kesalahan
      
    };
  }
}
