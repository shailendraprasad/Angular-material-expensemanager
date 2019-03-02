import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, public snackBar: MatSnackBar, private router: Router) { }

  email: string;
  password: string;
  loginFailed: boolean = false;

  ngOnInit() {
  }

  login() {
    if (this.email && this.password) {
      var loginSubscription = this.userService.login(this.email, this.password).subscribe((res: any) => {
        if (res.Message === "Login Successful") {
          this.userService.isAuthenticated.next(true);
          window.sessionStorage.setItem('authenticated', 'true');
          this.router.navigate(['/']);
        }
        else { 
          this.snackBar.open('Invalid Credetials', 'Dismiss', { duration: 2000, panelClass: ['blue-snackbar'] });
          this.loginFailed = true;
        }
      })

    }
  }
}
