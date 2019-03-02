import { Injectable } from '@angular/core';
import { User } from './UserModel';
import { EventEmitter } from 'events';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseExpenseApiUrl } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public isAuthenticated = new BehaviorSubject<boolean>(Boolean(window.sessionStorage.getItem('authenticated')) || false);


  registerUser(user: User) {
    return this.http.post(baseExpenseApiUrl + 'user/create', user, { observe: 'response' }).pipe(map((result: Response) => {
      return result.body;
    }));
  }

  login(email: string, password: string) {
    return this.http.post(baseExpenseApiUrl + 'user/login', { password: password, email: email }, { observe: 'response' })
      .pipe(map((result: Response) => {
        if (window.localStorage.getItem('authToken'))
          window.localStorage.removeItem('authToken');
        window.localStorage.setItem('authToken', result.headers.get('auth-Token'));
        window.sessionStorage.setItem('authenticated', 'true');
        return result.body;
      }));
  }

  logOut() {
    this.isAuthenticated.next(false);
    window.sessionStorage.removeItem('authenticated');
  }

  IsUserAuthenticated(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
