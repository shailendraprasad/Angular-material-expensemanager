
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { tap } from '../../../node_modules/rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ExpenseAPIInterceptor implements HttpInterceptor {
  constructor(public router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //if token information is present in the header then add it
    var token = window.localStorage.getItem('authToken') == null ? '' : window.localStorage.getItem('authToken');

    //adding authentication header information
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'APIKey': 'q7Tzbr2PHVa5TemOsBP7',
        'auth-token': token
      })
    });

    //give control to the next item
    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('here')
        }
      }, error => {
        console.log(error.status)
        if (error.status === 401) {
          this.router.navigate(['/user/login']);
        }
      })
    )
  }
}