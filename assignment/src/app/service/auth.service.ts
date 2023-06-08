import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  API_URL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {

  }

  signup(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signup`, user);
  }

  signin(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signin`, user);
  }
  isAuthenticated() {
    return JSON.parse(this.localStorage.retrieve('user')!) || null;
  }
}
