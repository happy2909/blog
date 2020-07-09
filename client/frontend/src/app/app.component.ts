import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    public userService: UserService
  ) {}

  /////////////////////////

  logout() {
    this.http.post(`/api/user/logout`, {}).subscribe(() => {
      this.userService.isLoggedIn = false;
      this.router.navigateByUrl('/');
    });
  }
}
