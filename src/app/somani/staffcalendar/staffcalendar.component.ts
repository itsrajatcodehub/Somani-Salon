import { Component, OnInit } from '@angular/core';
 import { CalendarOptions } from '@fullcalendar/core';


@Component({
  selector: 'app-staffcalendar',
  templateUrl: './staffcalendar.component.html',
  styleUrls: ['./staffcalendar.component.scss']
})
export class StaffcalendarComponent implements OnInit {

 Events = []

 calendarOptions !: CalendarOptions
 onDateClick(res:{dateStr:string}){
   alert("You clicked on :" + res.dateStr)
 }

  constructor() {}

  ngOnInit(): void {
     setTimeout(() => {
 this.calendarOptions = {
   initialView: 'dayGridMonth',
  //  dateClick:this.onDateClick.bind(this),
   events:this.Events
 }
     },3500)
   }

  }
  
  
