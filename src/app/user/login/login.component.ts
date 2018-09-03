import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, public snackBar: MatSnackBar) { }

  email: string;
  password: string;
  loginFailed: boolean = false;

  ngOnInit() {
  }

  login() {

    if (this.email && this.password) {
      let result = this.userService.login(this.email, this.password);

      if (!result) {
        this.loginFailed = true;
        this.snackBar.open('Invalid Credentials', 'Dismiss', { duration: 800 });
      }
    }
  }

}
