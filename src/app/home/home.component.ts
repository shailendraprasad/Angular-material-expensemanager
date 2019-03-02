import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean = false;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.IsUserAuthenticated().subscribe(data => {
      this.isAuthenticated = data;
    })
  }

}
