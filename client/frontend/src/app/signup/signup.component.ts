import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',  
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    
  }

  user = {
    username: '',
    password: '',
    email: '',
  };

  saveUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      email: this.user.email,
    };

    /////check username, email


    this.userService.signup(data).subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
