import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddExpenseComponent } from './Expense/add-expense.component';
import { ViewExpenseComponent } from './Expense/view-expense.component';
import { isLoggedInRouteGuard } from './Common/isLoggedInRouteGuard';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'addexpense', component: AddExpenseComponent, canActivate: [isLoggedInRouteGuard] },
  { path: 'viewexpense', component: ViewExpenseComponent, canActivate: [isLoggedInRouteGuard] },
  { path: 'user', loadChildren: "./user/user.module#UserModule" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
