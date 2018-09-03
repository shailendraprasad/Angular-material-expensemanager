import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [`.spacer {
  flex: 1 1 auto;
}

button, span {
  font-color-white;
  cursor: pointer;
}`]
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  isAuthenticated: any;

  ngOnInit() {
    this.userService.IsUserAuthenticated().subscribe(data => {
      this.isAuthenticated = data;
    });
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/user/login']);
  }

}
