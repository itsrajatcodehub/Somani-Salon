import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AfterAuthComponent } from './after-auth.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterAuthRoutingModule { }
