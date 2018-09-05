import { Component, OnInit, ViewChild } from '@angular/core';
import { Expense } from './ExpenseModel';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  displayedColumns: string[] = ['amount', 'category', 'date'];
  dataSource = new MatTableDataSource();

  isLoading = true;
  subscriptionForExpenseData;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private expenseService: ExpenseService) { }


  ngOnInit() {
    this.subscriptionForExpenseData = this.expenseService.getAllExpenses().
      subscribe(data => {
        this.isLoading = false;
        this.dataSource.data = data.userExpenses;
      });
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.subscriptionForExpenseData.unsubscribe();
  }

}
