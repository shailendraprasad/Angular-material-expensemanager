import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class isLoggedInRouteGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {

    }

    canActivate(): Observable<boolean> {
        return this.userService.IsUserAuthenticated().pipe(map(data => {
            if (data === false) {
                this.router.navigate(['/user/login']);
            }
            return data
        }));
    }
}