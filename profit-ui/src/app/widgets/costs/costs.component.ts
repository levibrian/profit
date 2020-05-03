import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'profit-costs',
  templateUrl: 'costs.component.html',
  styleUrls: ['costs.component.scss']
})

export class CostsComponent implements OnInit {
  @ViewChild("doughnutCanvas", {static: false}) doughnutCanvas: ElementRef;
  @ViewChild(IonReorderGroup, {static: false}) reorderGroup: IonReorderGroup;

  private doughChart: Chart;
  private earnings: string;
  private totalExpenses: string;
  private expensesPendingPayment: string;
  private listItems: any;

  constructor() {

    this.listItems = [
      { description: "Alquiler", amount: 13500, paid: true },
      { description: "Expensas", amount: 6500, paid: false },
      { description: "VISA", amount: 25300, paid: true },
    ];

    this.earnings = "90000";
    this.totalExpenses = "56320";
    
    this.expensesPendingPayment = this.calculatePendingPayments();
  }

  ngOnInit() {

    // this.doughChart = new Chart(this.doughnutCanvas.nativeElement, {
    //   type: "doughnut",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
    //       }
    //     ]
    //   }
    // });
  }

  doReorder(ev: any) {

     const draggedItem = this.listItems.splice(ev.detail.from, 1)[0];  
     this.listItems.splice(ev.detail.to, 0, draggedItem);   
     ev.detail.complete();  
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  calculatePendingPayments() {
    
    debugger;
    return this.listItems.filter((expense) => {
      return !expense.paid;
    }).map(a => a.amount)
      .reduce(function(a, b){
        return a + b;
      });
  }

  checkboxOnChange() {
    console.log(this.listItems);
  }
}
