import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post('/api/user/signup', data);
  }

  login(data: any): Observable<any> {
    return this.http.post('/api/user/login', data);
  }
}
