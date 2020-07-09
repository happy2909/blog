import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {}

  user = {
    username: '',
    password: '',
    email: '',
  };

  submit(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
    };

    /////check username,pass

    this.userService.login(data).subscribe(
      () => {
        this.userService.isLoggedIn = true;
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
