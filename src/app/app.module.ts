import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './Expense/add-expense.component';
import { AngularmaterialModule } from './/angularmaterial.module';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { ViewExpenseComponent } from './Expense/view-expense.component';
import { ExpenseService } from './Expense/expense.service';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AddExpenseComponent,
    ViewExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [ExpenseService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
