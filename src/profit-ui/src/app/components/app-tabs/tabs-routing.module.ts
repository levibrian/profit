import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'costs',
        loadChildren: () => import('../../pages/costs/costs.module').then(m => m.CostsModule)
      },
      {
        path: 'investments',
        loadChildren: () => import('../../pages/investments/investments.module').then(m => m.InvestmentsModule)
      },
      {
        path: 'expense-form',
        loadChildren: () => import('../../pages/expense-form/expense-form.module').then( m => m.ExpenseFormPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
