import { Injectable } from '@angular/core';
import { Expense } from './ExpenseModel';
import { of, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  expenses: Expense[] = new Array();

  AddExpense(expense): Observable<boolean> {
    this.expenses = JSON.parse(window.localStorage.getItem('expenses')) == null ? new Array() :
      JSON.parse(window.localStorage.getItem('expenses'));
    this.expenses.push(expense);
    window.localStorage.setItem('expenses', JSON.stringify(this.expenses));

    return of(true);
  }

  getAllExpenses(): Observable<any> {

    return new Observable(observer => {
      setInterval(() => {
        let data = of(JSON.parse(window.localStorage.getItem('expenses')))
        observer.next(data);
      }, 1000)
    })
  }
} 
