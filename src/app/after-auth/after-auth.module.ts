import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterAuthRoutingModule } from './after-auth-routing.module';
import { AfterAuthComponent } from './after-auth.component';
import { TransactionComponent } from './transaction/transaction.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
<<<<<<< Updated upstream
=======
import { HomeComponent } from './home/home.component';
>>>>>>> Stashed changes
import { MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
<<<<<<< Updated upstream
=======
import {MatProgressBarModule} from '@angular/material/progress-bar';
>>>>>>> Stashed changes
 
@NgModule({
  declarations: [
    AfterAuthComponent,
    TransactionComponent,
    InventoryComponent,
    LeftpanelComponent,
<<<<<<< Updated upstream
=======
    HomeComponent,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    MatSelectModule
=======
    MatSelectModule,
    MatProgressBarModule
>>>>>>> Stashed changes
  ],
  exports: [ 
    TransactionComponent,
    InventoryComponent,
    LeftpanelComponent,
<<<<<<< Updated upstream
=======
    HomeComponent,
>>>>>>> Stashed changes
  ]
})
export class AfterAuthModule { }
