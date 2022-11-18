import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AfterAuthComponent } from './after-auth.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MessageComponent } from './message/message.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TaskComponent } from './task/task.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryComponent
  }, 
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'client',
    component: ClientComponent
  },
  {
    path : 'message',
    component: MessageComponent
  },
  {
    path : 'task',
    component: TaskComponent
  },
  {
    path : 'review',
    component: ReviewsComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterAuthRoutingModule { }
