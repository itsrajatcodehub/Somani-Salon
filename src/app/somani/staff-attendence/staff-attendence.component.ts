import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AddstaffComponent } from '../staffAttendence/addstaff/addstaff.component';


@Component({
  selector: 'app-staff-attendence',
  templateUrl: './staff-attendence.component.html',
  styleUrls: ['./staff-attendence.component.scss'],
})
export class StaffAttendenceComponent implements OnInit {
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

  constructor(private dialog : MatDialog) {}

  openDialog(){
    this.dialog.open(AddstaffComponent);
  }

  ngOnInit(): void {}

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
