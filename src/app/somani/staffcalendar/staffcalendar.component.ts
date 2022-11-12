import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-staffcalendar',
  templateUrl: './staffcalendar.component.html',
  styleUrls: ['./staffcalendar.component.scss']
})
export class StaffcalendarComponent implements OnInit {

  events = [];
  calendarOptions: CalendarOptions | undefined;
  constructor(private http:HttpClient) {}
  
  ngOnInit(){
    //web api calling to get dynamic events
    this.http.get('http://localhost/events.php').subscribe(data => {
        // this.events.push(data);
        console.log(this.events);
        
   });
   setTimeout(() => {
   //full calendar setting and event binding
    this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.events[0]};
    }, 1000);
  }
}
  
  
