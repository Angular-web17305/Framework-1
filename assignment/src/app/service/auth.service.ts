// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private role: string = '';
//   API_URL: string = 'http://localhost:3000/api';
//   constructor(private http: HttpClient) {

//   }
//   setRole(role: string) {
//     this.role = role;
//   }

//   signup(user: any): Observable<any> {
//     return this.http.post<any>(`${this.API_URL}/signup`, user);
//   }
//   signin(user: any): Observable<any> {
//     return this.http.post<any>(`${this.API_URL}/signin`, user);
//   }
//   signinAsAdmin(admin: any): Observable<any> {
//     return this.http.post<any>(`${this.API_URL}/signin`, admin);
//   }
//   logout(): Observable<any> {
//      return this.http.post<any>(`${this.API_URL}/logout`, {});
//   }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string = '';
  API_URL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  setRole(role: string) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }

  signup(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signup`, user);
  }

  signin(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signin`, user);
  }

  signinAsAdmin(admin: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/signin`, admin);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/logout`, {});
  }
}
