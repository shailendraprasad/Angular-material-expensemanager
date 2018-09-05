import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './Expense/add-expense.component';
import { AngularmaterialModule } from './angularmaterial.module';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewExpenseComponent } from './Expense/view-expense.component';
import { ExpenseService } from './Expense/expense.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExpenseAPIInterceptor } from './Common/expenseApi.interceptor';

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
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [ExpenseService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ExpenseAPIInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
