import { Component, OnInit } from '@angular/core';
import { Expense } from './ExpenseModel';
import { NgForm } from '@angular/forms';
import { ExpenseService } from './expense.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense: Expense = new Expense();

  constructor(private expenseService: ExpenseService, public snackBar: MatSnackBar) {
  }

  categories: string[] = ["Eating out at fancy restaurant",
    "Eating out at local mess",
    "Online food order",
    "Local bus travel",
    "Ola/Uber travel",
    "Snacks - Healthy",
    "Train travel",
    "Snacks - Healthy",
    "Snacks - Junk",
    "Gifts",
    "Home Interior",
    "Vegetables",
    "Groceries",
    "Home Cleaning"]

  ngOnInit() {
  }

  SubmitExpense(form) {
    if (form.valid) {
      let expenseToAdd = new Expense();
      expenseToAdd.amount = form.value.amount;
      expenseToAdd.category = form.value.category;
      expenseToAdd.date = form.value.date;

      this.expenseService.AddExpense(expenseToAdd).subscribe(res => {
        form.resetForm();

        this.snackBar.open('Expense Added', 'Dismiss', { duration: 2000 });
      });


    }
  }

  Cancel(form: NgForm) {
    form.resetForm();

  }

}
