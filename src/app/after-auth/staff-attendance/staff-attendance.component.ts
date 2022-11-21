import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsaComponent } from './addsa/addsa.component';

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html',
  styleUrls: ['./staff-attendance.component.css']
})
export class StaffAttendanceComponent implements OnInit {
  title = 'Table'
  headers = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  staffs = [
    {
      "name" : "Travis",
      "monday" : "Present",
      "tuesday" :"Presen",
      "wednesday" :"Presen",
      "thursday" : "Absent" ,
      "friday" : "Absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "Present",
      "tuesday" :"Presen",
      "wednesday" :"Presen",
      "thursday" : "Absent",
      "friday" : "Absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "Present",
      "tuesday" :"Presen",
      "wednesday" :"Presen",
      "thursday" : "Absent",
      "friday" : "Absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"Present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"present",
      "wednesday" :"Present",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
    {
      "name" : "Travis",
      "monday" : "present",
      "tuesday" :"presen",
      "wednesday" :"presen",
      "thursday" : "absent",
      "friday" : "absent"
  
    },
  ]
  dialogRef: any;

  constructor(private dialog : MatDialog) { }

   openDialog(){
     this.dialog.open(AddsaComponent);
   }

  ngOnInit(): void {
  }
  id: any = '';
  steam(ids:any){
    if(this.id == ids){
      this.id = '';
    }
    else{
      this.id = ids;
    }
  }

}