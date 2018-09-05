import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { AngularmaterialModule } from '../angularmaterial.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '../../../node_modules/@angular/common/http';
import { ExpenseAPIInterceptor } from '../Common/expenseApi.interceptor';

@NgModule({
  imports: [
    CommonModule, UserRoutingModule, AngularmaterialModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ExpenseAPIInterceptor,
    multi: true
  }]
})
export class UserModule { }
