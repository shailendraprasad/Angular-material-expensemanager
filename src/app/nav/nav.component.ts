import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

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

  opened: boolean;
  constructor(private userService: UserService, private router: Router) { }
  isAuthenticated: any;

  ngOnInit() {
    this.userService.IsUserAuthenticated().subscribe(data => {
      this.isAuthenticated = data;
    });
  }

  logOut() {
    this.router.navigate(['/user/login']);
    this.sideNavToggleEvent.emit("logout");
    this.userService.logOut();
  }

  // Initialize isDarkTheme to false
  isDarkTheme: boolean = false;

  @Output() changeThemeEvent = new EventEmitter();
  @Output() sideNavToggleEvent = new EventEmitter();
  // Your code here

  changeTheme(): void {
    if (this.isDarkTheme) {
      this.isDarkTheme = false;
    } else {
      this.isDarkTheme = true;
    }

    this.changeThemeEvent.emit(this.isDarkTheme);
  }

  openCloseSideNav() {
    this.sideNavToggleEvent.emit();
  }

}
