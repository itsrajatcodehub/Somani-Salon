import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { StaffAttendenceComponent } from './staff-attendence/staff-attendence.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddstaffComponent } from './staffAttendence/addstaff/addstaff.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StaffcalendarComponent } from './staffcalendar/staffcalendar.component';
import { MessageComponent } from './message/message.component';
import { AddmessageComponent } from './message/addmessage/addmessage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TaskComponent } from './task/task.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

  

@NgModule({
  declarations: [
    ClientComponent,
    StaffAttendenceComponent,
    AddstaffComponent,
    StaffcalendarComponent,
    MessageComponent,
    AddmessageComponent,
    ReviewsComponent,
    TaskComponent,
    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
       FullCalendarModule,
       HttpClientModule,
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
