import { Injectable } from '@angular/core';
import { User } from './UserModel';
import { EventEmitter } from 'events';
import { Observable, Subject, BehaviorSubject } from '../../../node_modules/rxjs';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  private isAuthenticated = new BehaviorSubject<any>(window.sessionStorage.getItem('authenticated') || false);


  registerUser(user: User) {
    this.isAuthenticated.next(true);
  }

  login(email: string, password: string) {

    if (email === 'test@email.com' && password === 'password') {
      this.isAuthenticated.next(true);
      window.sessionStorage.setItem('authenticated', 'true');
      this.router.navigate(['/']);
      return true;
    }
    else
      return false;

  }

  logOut() {
    this.isAuthenticated.next(false);
    window.sessionStorage.removeItem('authenticated');
  }

  IsUserAuthenticated(): Observable<any> {
    return this.isAuthenticated.asObservable();
  }
}
