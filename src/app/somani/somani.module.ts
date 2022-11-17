import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { StaffAttendenceComponent } from './staff-attendence/staff-attendence.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { AddstaffComponent } from './staffAttendence/addstaff/addstaff.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StaffcalendarComponent } from './staffcalendar/staffcalendar.component';
import { MessageComponent } from './message/message.component';
import { AddmessageComponent } from './message/addmessage/addmessage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TaskComponent } from './task/task.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { staffcalendar } from './component';

  

@NgModule({
  declarations: [
    ClientComponent,
    StaffAttendenceComponent,
    AddstaffComponent,
    MessageComponent,
    AddmessageComponent,
    ReviewsComponent,
    TaskComponent,
    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    RouterModule.forChild([
      { path: 'client', component: ClientComponent},
      { path: 'staffattendence', component: StaffAttendenceComponent},
      { path: 'staffcalendar', component: StaffcalendarComponent },
      { path: 'message', component: MessageComponent },
      { path: 'review', component: ReviewsComponent },
      { path: 'task', component: TaskComponent }
    ])
    
  ]
  
})
export class SomaniModule { }
