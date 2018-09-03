import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { AngularmaterialModule } from '../angularmaterial.module';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule, UserRoutingModule, AngularmaterialModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: []
})
export class UserModule { }
