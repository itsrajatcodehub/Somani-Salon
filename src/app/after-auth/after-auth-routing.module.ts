import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AfterAuthComponent } from './after-auth.component';
<<<<<<< Updated upstream
=======
import { HomeComponent } from './home/home.component';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  }
=======
  },
  {
    path : 'home',
    component: HomeComponent
  },
>>>>>>> Stashed changes
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterAuthRoutingModule { }
