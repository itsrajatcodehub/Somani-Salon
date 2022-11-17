import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterAuthRoutingModule } from './after-auth-routing.module';
import { AfterAuthComponent } from './after-auth.component';
import { TransactionComponent } from './transaction/transaction.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ClientComponent } from './client/client.component';
import { TaskComponent } from './task/task.component';
import { MessageComponent } from './message/message.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddmessageComponent } from './message/addmessage/addmessage.component';
@NgModule({
  declarations: [
    AfterAuthComponent,
    TransactionComponent,
    InventoryComponent,
    LeftpanelComponent,
    HomeComponent,
    ClientComponent,
    TaskComponent,
    MessageComponent,
    ReviewsComponent,
    AddmessageComponent,
  ],
  imports: [
    CommonModule,
    AfterAuthRoutingModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  exports: [ 
    TransactionComponent,
    InventoryComponent,
    LeftpanelComponent,
    HomeComponent,
    ClientComponent,
    TaskComponent,
    MessageComponent,
    ReviewsComponent
  ]
})
export class AfterAuthModule { }
