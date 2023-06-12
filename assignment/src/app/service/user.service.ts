import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = `http://localhost:3000/api/users`; 
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }
  deleteUser(userId: string): Observable<void> {
    const url = `${this.usersUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
}
