import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControlName, FormControl} from '@angular/forms';
import { collection, Firestore } from '@angular/fire/firestore';
import { getDoc, doc, addDoc } from 'firebase/firestore';

interface SER {
  value: string;
  viewValue: string;
}

interface STY{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // displayAppointData: any
  constructor(private _formBuilder: FormBuilder, private firestore: Firestore) { }
  @Output() close:EventEmitter<any>=new EventEmitter()
  ngOnInit(): void {
  }

  isLinear = false;
  

  shifts: SER[] = [
    {value: 'Morning', viewValue: 'Morning'},
    {value: 'Evening', viewValue: 'Evening'},
  ];

  attendance : STY[] = [
    {value: 'Present', viewValue: 'Present'},
    {value: 'Absent', viewValue: 'Absent'},
  ]

  employee = new FormGroup({
    name : new FormControl('',[Validators.required]),
    shift : new FormControl('',[Validators.required]),
    attendance : new FormControl('',[Validators.required])
  })

  submit(){
    console.log(this.employee.value);
    this.close.emit() 
    // to add the data
    addDoc(collection(this.firestore,'employee'),
      {
        name:this.employee.value.name, 
        shift: this.employee.value.shift,
        attendance: this.employee.value.attendance
      }).then((appointmentdata)=>{
        console.log('Doc added');
    }).catch((error) => alert("problem in add doc"))
}
}
