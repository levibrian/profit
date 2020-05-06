import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { IonReorderGroup } from '@ionic/angular';
import { Expense } from 'src/app/model/Expense';

@Component({
  selector: 'profit-costs',
  templateUrl: 'costs.page.html',
  styleUrls: ['costs.page.scss']
})

export class CostsPage implements OnInit {
  @ViewChild("doughnutCanvas", {static: false}) doughnutCanvas: ElementRef;
  @ViewChild(IonReorderGroup, {static: false}) reorderGroup: IonReorderGroup;

  private doughChart: Chart;
  private showManage: boolean;
  private earnings: string;
  private totalExpenses: string;
  private expensesPendingPayment: number;
  private listItems: Array<Expense>;

  constructor() {

    this.listItems = [
      new Expense(1, "Alquiler", 13500, true),
      new Expense(2, "Expensas", 6645, false),
      new Expense(3, "Psicologo", 4000, false),
      new Expense(4, "VISA", 25400, false),
      new Expense(5, "AMEX", 8900, true),
      new Expense(3, "Psicologo", 4000, false),
      new Expense(4, "VISA", 25400, false),
      new Expense(5, "AMEX", 8900, true),
      new Expense(3, "Psicologo", 4000, false),
      new Expense(4, "VISA", 25400, false),
      new Expense(5, "AMEX", 8900, true),
    ];

    this.showManage = false;
    this.earnings = "90000";
    this.totalExpenses = "56320";
    this.expensesPendingPayment = this.calculatePendingPayments();
  }

  ngOnInit() {

  }

  doReorder(ev: any) {

     ev.detail.complete();  
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  toggleManageButtons() {
    this.showManage = !this.showManage;
  }

  calculatePendingPayments() {
    return this.listItems.filter((expense) => {
      return !expense.isPaid;
    }).map(a => a.amount)
      .reduce(function(a, b){
        return a + b;
      });
  }

  logScrollStart(ev: any) {
    console.log(ev);
  }

  checkboxOnChange(ev: any, item: Expense) {
    // update database value.
    this.expensesPendingPayment = !item.isPaid ? 
          this.expensesPendingPayment - item.amount : 
          this.expensesPendingPayment + item.amount;
  }
}
