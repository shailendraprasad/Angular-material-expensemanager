import { Injectable } from '@angular/core';
import { Expense } from './ExpenseModel';
import { of, Observable } from 'rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { baseExpenseApiUrl } from '../config';
import { map } from '../../../node_modules/rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  expenses: Expense[] = new Array();

  AddExpense(expense): Observable<boolean> {
    return this.http.post(baseExpenseApiUrl + 'expense/create', expense, { observe: 'response' }).pipe(map((result: Response) => {
      console.log(result.body)
      return result.body;
    }));
  }

  getAllExpenses(): Observable<any> {
    return this.http.get(baseExpenseApiUrl + 'expense/get', { observe: 'response' }).pipe(map((result: Response) => {
      console.log(result.body)
      return result.body;
    }));
  }
} 
